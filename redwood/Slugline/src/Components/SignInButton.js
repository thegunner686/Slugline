import React, { useState } from "react";

import {
    Button,
    Image
} from "react-native-elements";

import styles from "../Styles/Components/SignInButton";

import auth from "@react-native-firebase/auth";

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '666812137857-bdo9lhprvhi1u5b76e6oju6e1444kqi3.apps.googleusercontent.com',
});

function SignInButtonProvider() {
    let [disabled, setDisabled] = useState(false);

    const onPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential);
    };

    return (
        <SignInButton
            disabled={disabled}
            onPress={onPress}
        />
    );
}

function SignInButton(props) {
    return (
        <Button
            title="UC Santa Cruz Log In"
            type="solid"
            onPress={props.onPress}
            containerStyle={styles.signUpButtonContainer}
            buttonStyle={styles.signUpButton}
            titleStyle={styles.signUpButtonTitle}
            raised={true}
            icon={<Image
                style={styles.buttonIcon}
                source={require("../../assets/uc_seal.png")}
                placeholderStyle={styles.buttonIconPlaceholder}
            />}
            disabled={props.disabled}
            iconLeft
        />
    )
}

export default SignInButtonProvider;