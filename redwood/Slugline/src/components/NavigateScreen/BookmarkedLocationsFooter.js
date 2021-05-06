import React from "react";

import {
    View,
    ScrollView
} from "react-native";

// Components
import BookmarkedLocationsHeader from "./BookmarkedLocationsHeader";

import { width, height, Colors, Fonts, Shadow } from "../../stylesheet";

function BookmarkedLocationsFooter({ closeModal, openModal }) {
    return (
        <View style={{
            backgroundColor: Colors.White.hex,
            width,
            height: 100,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            ...Shadow.top
        }}>
            <ScrollView 
                style={{
                    padding: 20,
                    paddingTop: 5,
                }}
                onScrollBeginDrag={openModal}
            >
                <BookmarkedLocationsHeader 
                    open={false}
                    onPress={closeModal}
                />
            </ScrollView>
    </View>
    )
}

export default BookmarkedLocationsFooter;