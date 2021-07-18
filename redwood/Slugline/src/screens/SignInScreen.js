import React from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {
    Image
} from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";

import { SignInButton } from "../components/SignIn";

import { Colors, Fonts, width, height, Shadow, rgba } from "../stylesheet";

export default function SignInScreen() {
    return (
        <>
        <Image 
            source={require("../../assets/ucsc_photo5.jpeg")}
            style={styles.backgroundImage}
        />
        <View style={styles.bottomContainer}>
            <View style={styles.titleContainer}>
                <Image
                    source={require("../../assets/slugline_logo_light.png")}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Your connection to the UCSC Community</Text>
            </View>
            <View style={styles.buttonContainer}>
                <SignInButton />
            </View>
        </View>
        </>
    )
}

const bottomContainerRadius = 30;

let styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Blue1.rgb,
        flex: 1,
    },
    background: {
        width,
        height: 300
    },
    backgroundImage: {
        width,
        height
    },
    bottomContainer: {
        width,
        height: height / 2.5,
        backgroundColor: rgba(Colors.Blue1)(0.6),
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderTopLeftRadius: bottomContainerRadius,
        borderTopRightRadius: bottomContainerRadius,
        position: "absolute",
        ...Shadow.top,
        bottom: 0,
        paddingTop: 20
    },
    titleContainer: {
        flex: 1,
    },
    logo: {
        width: 300,
        height: 80
    },
    tagline: {
        color: Colors.White.rgb,
        ...Fonts.SubHeader4
    },
    buttonContainer: {
        flex: 1,
    }
});
