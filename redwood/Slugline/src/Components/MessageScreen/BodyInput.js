import React from "react";

import {
    Icon,
    Input
} from "react-native-elements";

import styles from "../../Styles/Components/MessageScreen/BodyInput";

function BodyInput(props, ref) {

    let { category, onChangeText, value, disabled } = props;
    
    return (
        <Input
            inputStyle={styles.input}
            inputContainerStyle={styles.container}
            labelStyle={styles.label}
            label={category == "SolveIntent" ? "Describe it below." : "Provide details below."}
            ref={ref}
            textAlignVertical="top"
            returnKeyType="done"
            blurOnSubmit={true}
            placeholder={category == "SolveIntent" ? "Tell us what's going on!" : "The banana slugs are doing what?!"}
            multiline={true}
            maxLength={1000}
            leftIconContainerStyle={styles.leftIconContainer}
            onChangeText={onChangeText}
            value={value}
            disabled={disabled}
            leftIcon={
                <Icon
                    name="text-subject"
                    type="material-community"
                    size={16}
                />
            }
        />
    );
}

export default React.forwardRef(BodyInput);