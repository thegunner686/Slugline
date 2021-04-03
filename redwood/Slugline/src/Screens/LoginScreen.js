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
} from "react-native-elements"

import styles from "../Styles/Screens/LoginScreen";

function LoginScreen() {
    let [disabled, setDisabled] = useState(false);
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
                <Button
                    title="UC Santa Cruz Log In"
                    type="solid"
                    onPress={() => {
                        
                    }}
                    containerStyle={styles.signUpButtonContainer}
                    buttonStyle={styles.signUpButton}
                    titleStyle={styles.signUpButtonTitle}
                    raised={true}
                    icon={<Image
                        style={styles.buttonIcon}
                        source={require("../../assets/uc_seal.png")}
                        placeholderStyle={styles.buttonIconPlaceholder}
                    />}
                    disabled={disabled}
                    iconLeft
                />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;