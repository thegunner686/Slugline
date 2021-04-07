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

import LoginButton from "../Components/LoginButton";

import styles from "../Styles/Screens/LoginScreen";

import { useAuth } from "../Stores/useAuth";

function LoginScreen() {
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
                <LoginButton/>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;