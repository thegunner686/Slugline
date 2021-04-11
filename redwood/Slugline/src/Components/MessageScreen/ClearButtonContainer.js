import React from "react";

import {
    View
} from "react-native";

import {
    Button,
    Icon
} from "react-native-elements";

import styles from "../../Styles/Components/MessageScreen/ClearButtonContainer";
import { Colors } from "../../Styles/stylesheet";

function MessageScreenClearButtonContainer(props) {

    let { showButton, onPress } = props;

    return (
        <View style={styles.container}>
            { showButton == true &&
                <Button
                    title="Clear"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    icon={() => (
                        <Icon
                            name="close-circle"
                            type="material-community"
                            color={Colors.dark.hex}
                            size={16}
                        />
                    )}
                    onPress={onPress}
                />
            }
        </View>
    )
}

export default MessageScreenClearButtonContainer;