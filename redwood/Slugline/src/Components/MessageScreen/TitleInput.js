import React from "react";

import {
    Input,
    Icon
} from "react-native-elements";

import styles from "../../Styles/Components/MessageScreen/TitleInput";

function TitleInput(props, ref) {

    let { category, value, disabled, onEndEditing, onChangeText } = props;

    return (
        <Input
            inputStyle={styles.input}
            inputContainerStyle={styles.container}
            labelStyle={styles.label}
            label={category == "SolveIntent" ? "Give your problem or question a title." : "Give your report a title."}
            ref={ref}
            textAlignVertical="top"
            returnKeyType="next"
            clearButtonMode="while-editing"
            maxLength={100}
            value={value}
            placeholder={category == "SolveIntent" ? "I haven't seen any banana slugs." : "Banana slugs have infiltrated my dorm."}
            disabled={disabled}
            blurOnSubmit={true}
            onEndEditing={onEndEditing}
            onChangeText={onChangeText}
            leftIcon={
                <Icon
                    name="rename-box"
                    type="material-community"
                    size={16}
                />
            }
            autoFocus
        />
    );
}

export default React.forwardRef(TitleInput);