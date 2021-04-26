import React, { useState } from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context"

import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    KeyboardAvoidingView
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
import { Overlay } from "react-native-elements/dist/overlay/Overlay";

function SignInScreen(props) {
    const signIn = useStore(state => state.signIn)
    let [visible, setVisible] = useState(false);
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
            <Image
                style={{ width: 200, height: 200 }}
                source={require("../../assets/ucsc_logo.png")}
            />
            <View style={{
                backgroundColor: Colors.White.hex,
                width,
                height: height / 10 * 4.5,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                ...Shadow.top,
                alignItems: "center"
            }}>
                <View style={{ flex: 1}} ></View>
                <Text style={Fonts.Title4}>Slugline</Text>
                <Text style={Fonts.SubHeader5}>Your personal guide to UC Santa Cruz.</Text>
                <View style={{ flex: 1 }}></View>
                <Button
                    title="Sign in with your school email"
                    onPress={signIn}
                    buttonStyle={{
                        width: width / 4 * 3,
                        borderRadius: 10,
                        backgroundColor: Colors.Blue4.hex
                    }}
                    titleStyle={{ 
                        marginLeft: 10,
                        ...Fonts.Paragraph4
                    }}
                    icon={
                        <Image
                            style={{ height: 30, width: 30}}
                            source={require("../../assets/uc_seal.png")}
                        />
                    }
                />
                <Button
                    title="Having trouble signing in?"
                    type="clear"
                    onPress={() => setVisible(true)}
                    buttonStyle={{
                        width: width / 4 * 3,
                        marginTop: 10
                    }}
                    titleStyle={Fonts.Paragraph4}
                />
                <View style={{ flex: 1}} ></View>
                <View style={{ flex: 1}} ></View>
            </View>
        </View>

        <Overlay 
            isVisible={visible} 
            onBackdropPress={() => setVisible(false)}
            backdropStyle={{
                backgroundColor: "transparent"
            }}
            overlayStyle={{
                position: "absolute",
                bottom: 0,
                width,
                height: height / 10 * 8,
                backgroundColor: Colors.White.hex,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            }}
            animationType="slide"
        >
            <KeyboardAvoidingView 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }}
                >
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: width / 4 * 3
                    }}>
                        <Button
                            title="Having trouble signing in?"
                            type="clear"
                            onPress={() => setVisible(false)}
                            buttonStyle={{
                                width: width / 4 * 3,
                                marginTop: 10,
                            }}
                            titleStyle={Fonts.Paragraph4}
                            icon={
                                <Icon
                                    type="material"
                                    name="chevron-left"
                                />
                            }
                        />
                            <Text style={{
                                ...Fonts.Paragraph4,
                                marginBottom: 10
                            }}>
                                Hmm... Please fill out the information below and we'll try to resolve this as soon as possible!
                            </Text> 
                            <Input 
                                label="Email"
                                placeholder="example@ucsc.edu"
                                labelStyle={{
                                    ...Fonts.Label3,
                                    color: Colors.Grey3.hex
                                }}
                                inputStyle={Fonts.Paragraph4}
                                containerStyle={{
                                    paddingLeft: 4
                                }}
                                autoFocus
                            />
                            <Input 
                                label="Description of Error"
                                placeholder="ex. I try signing in with my ucsc email but I only get a white screen."
                                labelStyle={{
                                    ...Fonts.Label3,
                                    color: Colors.Grey3.hex
                                }}
                                inputStyle={Fonts.Paragraph4}
                                containerStyle={{
                                    paddingLeft: 4
                                }}
                                multiline
                            />
                            <Button
                                title="Submit"
                                titleStyle={{
                                    ...Fonts.Paragraph4,
                                    marginLeft: 10,
                                }}
                                buttonStyle={{
                                    width: width / 4 * 3,
                                    borderRadius: 10,
                                    backgroundColor: Colors.Blue4.hex
                                }} 
                                icon={
                                    <Icon
                                        type="material"
                                        name="done"
                                        color={Colors.White.hex}
                                    />
                                }
                            />
                    </View>
                </KeyboardAvoidingView>
        </Overlay>  
        </>
    )
}

export default SignInScreen;