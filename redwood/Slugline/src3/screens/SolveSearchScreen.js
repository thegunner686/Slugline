import React from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context";

import {
    View,
    Text
} from "react-native";

import {
    Button,
    Icon,
    Input
} from "react-native-elements";

import { Colors, width, height, Fonts } from "../stylesheet"

function SolveSearchScreen(props) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.White.hex
        }}>
            <Input
                placeholder="What can we help you with?"
                inputStyle={{
                    color: Colors.Black.hex,
                    ...Fonts.Paragraph3,
                    marginLeft: 5
                }}
                inputContainerStyle={{
                    width,
                    backgroundColor: Colors.White.hex,
                    borderColor: Colors.Grey6.hex,
                    borderBottomWidth: 1,
                    alignSelf: "center"
                }}
                containerStyle={{
                    position: "absolute",
                    top: Platform.OS == "ios" ? 80 : height / 20,
                    alignSelf: "center",
                    zIndex: 1,
                }}
                leftIcon={
                    <Icon 
                        name="chevron-left"
                        type="material"
                        color={Colors.Yellow2.hex}
                        size={36}
                        onPress={() => props.navigation.goBack()}
                    />
                }
                clearButtonMode="while-editing"
                autoFocus={true}
                onPress={() => props.navigation.navigate("SolveSearch")}
            />
        </SafeAreaView>
    )
}

export default SolveSearchScreen;