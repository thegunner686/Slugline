import React, { useState } from "react";

import {
    Button,
    Icon
} from "react-native-elements";

import styles from "../Styles/Components/CreateIntentButton";

function CreateIntentButtonProvider(props) {
    let [disabled, setDisabled] = useState(false);

    function onPress() {
        props.navigation.navigate("IntentStack");
    }

    return (
        <CreateIntentButton
            disabled={disabled}
            onPress={onPress}
        />
    );
}

function CreateIntentButton(props) {
    return (
        <Button
            title="Create Message"
            type="solid"
            onPress={props.onPress}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            raised={true}
            icon={<Icon
                name="plus"
                type="material-community"
                color="white"
            />}
            disabled={props.disabled}
            iconLeft
        />
    )
}

export default CreateIntentButtonProvider;