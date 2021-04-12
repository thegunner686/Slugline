import React from "react";

import {
    Button,
    Icon
} from "react-native-elements";

import styles from "../../Styles/Components/MessageScreen/ContinueButton";

function ContinueButton(props) {

    let { onPress, disabled } = props;

    return (
        <Button 
            containerStyle={styles.container}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            title="Continue"
            onPress={onPress}
            disabled={disabled}
            icon={
                <Icon
                    name="chevron-right"
                    type="material-community"
                    color="white"
                />
            }
            iconRight
        />
    );
}

export default ContinueButton;