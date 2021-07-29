import React, { useEffect } from "react";

import {
    StyleSheet,
    View
} from "react-native";

import { Colors, height, Shadow } from "../stylesheet";

import Animated, { 
    useSharedValue, 
    useAnimatedStyle,
    useAnimatedScrollHandler,
    useDerivedValue
} from "react-native-reanimated";

export default function StretchList({ header, body }) {

    let offsetY = useSharedValue(0);
    let headerShown = useSharedValue(true);

    useEffect(() => {
        headerShown.value = header != null;
    }, [header]);

    let headerScale = useDerivedValue(() => {
        if(offsetY.value < 0) {
            return 1 + (-offsetY.value / height)
        } else {
            return 1 //+(-offsetY.value / height)
        }
    }, [offsetY.value]);

    let headerTranslationY = useDerivedValue(() => {
        if(!headerShown.value) {
            return -height / 2
        }
        return offsetY.value > 0 ? offsetY.value : offsetY.value / 1.2
    }, [offsetY.value, headerShown.value]);

    let headerOpacity = useDerivedValue(() => {
        let val = 1 - (offsetY.value / height)
        return Math.max(0, val)
    }, [offsetY.value])

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            let { y } = event.contentOffset;
            offsetY.value = y;
        }
    });

    const animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            opacity: headerOpacity.value,
            transform: [
                {
                    scale: headerScale.value
                },
                {
                    translateY: offsetY.value > 0 ? offsetY.value : offsetY.value / 1.2
                }
            ]
        }
    });
    return (
        <Animated.ScrollView
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
        >   
            <Animated.View
                style={[{
                    height: header == null ? 0 : height / 2
                }, animatedHeaderStyle]}
            >
                {header}
            </Animated.View>
            
            <View style={styles.body}>
                {body}
            </View>
            
        </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    header: {
        height: height / 2
    },
    body: {
        zIndex: 0,
        ...Shadow.top,
        backgroundColor: Colors.White.rgb,
        height,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top: -5
    }
});
