import React, { useRef } from "react";

import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from "react-native";

import {
    Icon
} from "react-native-elements";

import openMap from 'react-native-open-maps';

import { width, height, Colors, Shadow, sizes, Fonts } from "../../stylesheet";

function EditButton({ onPress }) {
    return (
        <TouchableOpacity 
            style={{
                width: 35,
                height: 35,
                borderRadius: 35,
                position: "absolute",
                zIndex: 50,
                right: 0,
                top: 0,
                alignItems: "center",
                justifyContent: "center"
            }}
            onPress={onPress}
        >
            <Icon
                name="edit"
                type="material"
                color={Colors.Blue4.rgb}
            />
        </TouchableOpacity>
    )
}

function ShareButton({ onPress }) {
    return (
        <TouchableOpacity 
            style={{
                width: 35,
                height: 35,
                borderRadius: 35,
                position: "absolute",
                zIndex: 50,
                right: 0,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center"
            }}
            onPress={onPress}
        >
            <Icon
                name="ios-share"
                type="material"
                color={Colors.Blue3.rgb}
            />
        </TouchableOpacity>
    )
}

function BookmarkedLocationFlatlistItem({ bookmark, onEditPress, onSharePress }) {

    const onDirectionsHerePress = () => {
        openMap({
            ...bookmark.coordinate,
            query: bookmark.name
        });
    };

    return (
        <View style={{
            width: width / 4 * 3.5,
            height: height / 10,
            marginLeft: width / 4 * 0.25,
            marginRight: width / 4 * 0.25,
            backgroundColor: Colors.White.rgb,
            borderColor: bookmark.color.rgb,
            // borderBottomWidth: 5,
            borderRadius: 10,
            shadowColor: Colors.Black.rgb,
            shadowOpacity: 0.3,
            shadowRadius: 4,
            shadowOffset: {
                x: 0,
                y: 1
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            overflow: "visible"
        }}>
            <EditButton onPress={() => { onEditPress(bookmark) } } />
            <Icon 
                name="location-pin"
                type="material"
                color={bookmark.color.rgb}
                size={sizes.Icon2}
            />
            <View style={{
                flex: 1,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                <Text style={Fonts.SubHeader2}>{bookmark.name}</Text>
                <Text style={Fonts.Paragraph4}>{bookmark.description}</Text>
                <TouchableOpacity onPress={onDirectionsHerePress}>
                    <Text style={{
                        color: Colors.Blue4.rgb,
                        ...Fonts.Paragraph4
                    }}>Directions Here</Text>
                </TouchableOpacity>
            </View>
            <ShareButton onPress={() => { onSharePress(bookmark) } }/>
        </View>
    )
}

const BookmarkedLocationsHorizontalList = React.forwardRef(({ bookmarks, onScrollToItem, onEditPress, onSharePress }, ref) => {
    const onViewableItemsChangedRef = useRef(({ viewableItems, changed}) => {
        if(viewableItems.length == 0) return;
        let { item } = viewableItems[0];

        onScrollToItem(item);
    });
    const viewabilityConfigRef = useRef({ itemVisiblePercentThreshold: 80 });


    return (
        <View style={{
            width,
            height: height / 10 + 5,
            marginBottom: 10,
            overflow: "visible",
        }}>
            <FlatList
                horizontal={true}
                ref={ref}
                snapToAlignment="center"
                snapToInterval={width}
                onViewableItemsChanged={onViewableItemsChangedRef.current}
                viewabilityConfig={viewabilityConfigRef.current}
                decelerationRate="fast"
                data={bookmarks}
                renderItem={({ item }) => (
                    <BookmarkedLocationFlatlistItem
                        onSharePress={onSharePress}
                        onEditPress={onEditPress} 
                        bookmark={item}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
});

export default BookmarkedLocationsHorizontalList;