import React from "react";

import {
    View,
    Text
} from "react-native";

import {
    Icon
} from "react-native-elements";

import { Colors, Fonts, sizes, width, height, Shadow } from "../../stylesheet";

function BookmarkedLocationsHeader({ open, createLocation, onPress, onAddBookmarkPress }) {
    return (
        <>
            <Icon 
                name={open ? "chevron-down" : "chevron-up"}
                type="material-community"
                color={Colors.Grey5.rgb}
                onPress={onPress}
             />
            <View style={{ flexDirection: "row"}}>
                <View style={{ flex: 3}}>
                    <Text style={{
                        ...Fonts.SubHeader1,
                        marginBottom: 5,
                    }}>Bookmarked Locations</Text>
                    <Text style={{
                        ...Fonts.Paragraph5
                    }}>
                    Press and hold on the screen to bookmark a new location or click the button on the right.                    </Text>
                </View>
                <View style={{ flex: 1}}>
                    <Icon
                        name="add-location-alt"
                        type="material"
                        color={Colors.Red3.rgb}
                        size={36}
                        onPress={onAddBookmarkPress}
                    />
                </View>
            </View>
        </>
    )
}

export default BookmarkedLocationsHeader