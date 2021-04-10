import React, { useState } from "react";

import {
    Button,
    Icon
} from "react-native-elements";

import styles from "../Styles/Components/CreateMessageButton";

import { useStore } from "../Stores/useStore";

function CreateMessageButtonProvider() {
    let [disabled, setDisabled] = useState(false);
    let signIn = useStore(state => state.signIn);

    return (
        <CreateMessageButton
            disabled={disabled}
            onPress={signIn}
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