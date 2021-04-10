import React, { useState } from "react";

import {
    Button,
    Image
} from "react-native-elements";

import styles from "../Styles/Components/SignOutButton";

import { useStore } from "../Stores/useStore";

function SignOutButtonProvider() {
    let [disabled, setDisabled] = useState(false);
    let signOut = useStore(state => state.signOut);

    return (
        <SignOutButton
            disabled={disabled}
            onPress={signOut}
        />
    );
}

function SignOutButton(props) {
    return (
        <Button
            title="Sign Out"
            type="solid"
            onPress={props.onPress}
            containerStyle={styles.signOutButtonContainer}
            buttonStyle={styles.signOutButton}
            titleStyle={styles.signOutButtonTitle}
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