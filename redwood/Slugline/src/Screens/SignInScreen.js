import React, { useEffect, useState } from "react";

import {
    SafeAreaView,
    View,
    Text,
    Dimensions
} from "react-native";

import {
    Image,
    Button
} from "react-native-elements";

import SignInButton from "../Components/SignInButton";

import styles from "../Styles/Screens/SignInScreen";

import { useAuth } from "../Stores/useAuth";

function SignInScreen() {
    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
}

export default SignInScreen;