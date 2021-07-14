import React from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context"

import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import {
    Button,
    Icon,
    Image,
    Input
} from "react-native-elements";

import {
    SharedElement
} from "react-navigation-shared-element";

import { useStore } from "../useStore";

import { width, height, Colors, Shadow, Fonts } from "../stylesheet";

function SignInTroubleScreen(props) {
    return (
        <>
        <StatusBar barStyle="light-content"/>
        <ImageBackground
            style={{ position: "absolute", width: width * 1.1, height, left: -5 }}
            source={require("../../assets/SignInBackground.png")}
        />
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{
                        backgroundColor: Colors.White.hex,
                        width,
                        height: height / 10 * 8,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        ...Shadow.top,
                        alignItems: "center"
                    }}
                >
                    <Button
                        title="Having trouble signing in?"
                        type="clear"
                        onPress={() => props.navigation.goBack()}
                        buttonStyle={{
                            width: width / 4 * 3,
                            marginTop: 10
                        }}
                        titleStyle={Fonts.Paragraph4}
                        icon={
                            <Icon
                                type="material"
                                name="chevron-left"
                            />
                        }
                    />
                    <View style={{ flex: 1, width: width /  4 * 3 }}>
                        <Text style={Fonts.Paragraph4}>
                            Hmm... Fill out the information below and we'll try to resolve this as soon as possible!
                        </Text> 
                    </View>
                    <View style={{ flex: 1, width: width / 4 * 3}}>
                        <Input 
                            label="Email"
                            placeholder="example@ucsc.edu"
                            labelStyle={Fonts.Label3}
                            inputStyle={Fonts.Paragraph4}
                        />
                        <Input 
                            label="Description of error"
                            placeholder="ex. I try signing in with my ucsc email but I only get a white screen."
                            labelStyle={Fonts.Label3}
                            inputStyle={Fonts.Paragraph4}
                            multiline
                        />
                    </View>
                    <View style={{ flex: 1}} ></View>
                </KeyboardAvoidingView>
        </View>
        </>
    )
}

export default SignInTroubleScreen;