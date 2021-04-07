import React, { useState } from "react";

import {
    Button,
    Image
} from "react-native-elements";

import styles from "../Styles/Components/SignInButton";

import { useAuth } from "../Stores/useAuth";

function SignInButtonProvider() {
    let [disabled, setDisabled] = useState(false);
    let signIn = useAuth(state => state.signIn);

    return (
        <SignInButton
            disabled={disabled}
            onPress={signIn}
        />
    );
}

function SignInButton(props) {
    return (
        <Button
            title="UC Santa Cruz Sign In"
            type="solid"
            onPress={props.onPress}
            containerStyle={styles.signInButtonContainer}
            buttonStyle={styles.signInButton}
            titleStyle={styles.signInButtonTitle}
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