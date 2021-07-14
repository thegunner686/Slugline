import React from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context";

import {
    Text,
    View,
    Share
} from "react-native"

import {
    Icon
} from "react-native-elements"

import { Colors, Fonts, width, height, sizes } from "../stylesheet"

function CampusUpdatesDetailsScreen(props) {
    let { item } = props.route.params;

    const shareUpdate = async () => {
        try {
            const res = await Share.share({
                title: item.name,
                message: item.description
            });
        } catch(e) {
            
        }
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.White.hex
        }}>
            <View style={{
                flexDirection: "row",
                width,
                height: height / 15,
                borderBottomColor: Colors.Grey6.hex,
                borderBottomWidth: 1
            }}>
                <View style={{ flex: 1, justifyContent: "center"}}>
                    <Icon
                        name="chevron-left"
                        type="material"
                        color={Colors.Blue4.hex}
                        size={sizes.Icon3}
                        onPress={() => props.navigation.goBack()}
                    />
                </View>
                <View style={{ 
                    flex: 3,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text style={Fonts.Paragraph3}>Campus Update</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center"}}>
                    <Icon 
                        name="ios-share"
                        type="material"
                        color={Colors.Blue4.hex}
                        size={sizes.Icon4}
                        onPress={shareUpdate}
                    />
                </View>
            </View>
            <Text>{item?.name}</Text>
            <Text>{item?.description}</Text>
        </SafeAreaView>
    )
}

export default CampusUpdatesDetailsScreen;