import React, { useState } from "react";

import {
    Button,
    Image
} from "react-native-elements";

import styles from "../Styles/Components/SignInButton";

import auth from "@react-native-firebase/auth";

function SignOutButtonProvider() {
    let [disabled, setDisabled] = useState(false);

    const onPress = async () => {
        try {
            await auth().signOut()
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <SignOutButton
            disabled={disabled}
            onPress={onPress}
        />
    );
}

function SignOutButton(props) {
    return (
        <Button
            title="Signout"
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

export default SignOutButtonProvider;