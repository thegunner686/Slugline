import React from "react";

import {
    StyleSheet
} from "react-native";

import {
    Button,
    Image
} from "react-native-elements";

import { useAuth } from "../../stores/useAuth";

import { Colors, Fonts, width, height, sizes } from "../../stylesheet";

export default function SignInButton() {
    let [signIn] = useAuth(state => [state.signIn]);
    return (
        <Button 
            icon={
                <Image
                    source={require("../../../assets/google_logo.png")}
                    style={styles.buttonIcon}
                />
            }
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            title="Sign in with your school email"
            onPress={signIn}
            raised={true}
        />
    )
}

let styles = StyleSheet.create({
    button: {
        width: width / 10 * 9,
        backgroundColor: Colors.Blue2.rgb,
        borderRadius: 10,
    },
    buttonTitle: {
        ...Fonts.SubHeader3
    },
    buttonContainer: {
        borderRadius: 10,
    },
    buttonIcon: {
        width: sizes.Icon3,
        height: sizes.Icon3,
        marginRight: 10,
    }
})
