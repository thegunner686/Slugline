import React, { useEffect, useRef } from "react";

import {
    Flatlist,
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import HorizontalEventItem from "./HorizontalEventItem";

import Animated, { 
    useAnimatedStyle,
    useDerivedValue,
    withSpring
} from "react-native-reanimated";

import { width, height } from "../../stylesheet";

const HorizontalEventList = React.forwardRef(({ events, offset, navigateToEventView, showEventLocation}, ref) => {
    const onViewableItemsChangedRef = useRef(({ viewableItems, changed }) => {
        if(viewableItems.length == 0) return;
        let { item } = viewableItems[0];

    });

    const viewabilityConfigRef = useRef({ itemVisiblePercentThreshold: 80 });

    const renderEventItem = ({ item }) => {
        return <HorizontalEventItem event={item} onPress={navigateToEventView} showEventLocation={showEventLocation} />;
    };

    let offsetY = useDerivedValue(() => {
        return offset;
    }, [offset]);

    let containerScale = useDerivedValue(() => {
        return offsetY.value == 0 ? 1 : 1 - offsetY.value
    }, [offsetY.value]);

    let containerOpacity = useDerivedValue(() => {
        return offsetY.value == 0 ? 1 : 1 - offsetY.value
    }, [offsetY.value]);

    const animatedContainerStyle = useAnimatedStyle(() => {
        return {
            opacity: containerOpacity.value,
            transform: [
                {
                    scale: withSpring(containerScale.value, {
                        damping: 100,
                        stiffness: 200,
                        overshootClamping: true
                    })
                },
                {
                    translateY: withSpring(-offsetY.value *  height, {
                        damping: 100,
                        stiffness: 200
                    })
                }
            ]
        }
    });

    return (
        <Animated.View style={[styles.container, animatedContainerStyle]}>
            <FlatList 
                ref={ref}
                horizontal={true}
                snapToAlignment="center"
                snapToInterval={width}
                onViewableItemsChanged={onViewableItemsChangedRef.current}
                viewabilityConfig={viewabilityConfigRef.current}
                decelerationRate="fast"
                data={events}
                renderItem={renderEventItem}
                keyExtractor={item => item.id}
            />
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        bottom: height / 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default HorizontalEventList;
