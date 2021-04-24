import React from "react";

import {
    View,
    Text,
    ImageBackground
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
    Image,
} from "react-native-elements";

import SignInButton from "../Components/SignInButton";

import styles from "../Styles/Screens/SignInScreen";

function SignInScreen() {
    return (
        <ImageBackground source={require("../../assets/SignInBackground.png")} style={styles.imageBackground}>
            <View style={styles.topContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/ucsc_logo.png")}
                    placeholderStyle={styles.logoPlaceholder}
                />
                <Text style={styles.title}>
                    Slugline
                </Text>
                <Text style={styles.tagline}>
                    Your personal guide to UC Santa Cruz.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <SignInButton/>
            </View>
        </ImageBackground>
    )
}

export default SignInScreen;