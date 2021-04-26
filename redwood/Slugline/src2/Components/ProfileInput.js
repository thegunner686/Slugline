import React from "react";

import {
    Input
} from "react-native-elements";

import styles from "../Styles/Components/ProfileInput";

function ProfileInput(props) {
    let { editing } = props;
    return (
        <Input
            {...props}
            textAlignVertical="top"
            inputStyle={styles.input}
            labelStyle={styles.inputLabel}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            editable={editing}
            dataDetectorTypes="all"
        />
    )
}

export default ProfileInput;