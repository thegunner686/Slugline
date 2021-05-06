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

import { width, height, Colors, Shadow, sizes, Fonts } from "../../stylesheet";

function BookmarkedLocationFlatlistItem({ bookmark }) {
    return (
        <View style={{
            width: width / 4 * 3.5,
            height: height / 10,
            marginLeft: width / 4 * 0.25,
            marginRight: width / 4 * 0.25,
            backgroundColor: Colors.White.rgb,
            borderColor: bookmark.color.rgb,
            borderBottomWidth: 5,
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
            flexDirection: "row"
        }}>
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
                <TouchableOpacity>
                    <Text style={{
                        color: Colors.Blue4.rgb,
                        ...Fonts.Paragraph4,
                        marginTop: 5,
                    }}>Directions Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const BookmarkedLocationsHorizontalList = React.forwardRef(({ bookmarks, onScrollToItem }, ref) => {
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
            marginBottom: 10
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
                    <BookmarkedLocationFlatlistItem bookmark={item}/>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
});

export default BookmarkedLocationsHorizontalList;