import React, { useState } from "react";

import {
    Button,
    Icon
} from "react-native-elements";

import styles from "../Styles/Components/CreateMessageButton";

function CreateMessageButtonProvider(props) {
    let [disabled, setDisabled] = useState(false);

    function onPress() {
        props.navigation.navigate("MessageStack");
    }

    return (
        <CreateMessageButton
            disabled={disabled}
            onPress={onPress}
        />
    );
}

function CreateMessageButton(props) {
    return (
        <Button
            title="Create Message"
            type="solid"
            onPress={props.onPress}
            containerStyle={styles.messageButtonContainer}
            buttonStyle={styles.messageButton}
            titleStyle={styles.messageButtonTitle}
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

export default CreateMessageButtonProvider;