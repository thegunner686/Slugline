import React from "react";

import {
    Dimensions
} from "react-native";

import {
    Icon,
    CheckBox,
    Image
} from "react-native-elements";

import Header from "../MessageScreen/Header";

import styles from "../../Styles/Components/MessageSubmitScreen/SubmitHeader";
import { Colors } from "../../Styles/stylesheet";

let { width } = Dimensions.get("window");

function SubmitHeader(props) {
    let { photoURL, anonymous, onCheckboxPress } = props;
    return (
        <Header>
            {anonymous ?
                <Icon 
                    type="material-community"
                    name="incognito"
                    size={55}
                    color={Colors.dark.hex}
                    reverse
                    raised
                />
                :
                <Image 
                    source={{ uri: photoURL }}
                    style={styles.image}
                    placeholderStyle={styles.imagePlaceholder}
                />
            }
            <CheckBox
                title="Send Anonymously"
                checked={anonymous}
                onPress={onCheckboxPress}
                iconType="antdesign"
                checkedColor={Colors.yellow.hex}
                checkedIcon="checkcircle"
                uncheckedIcon="checkcircleo"
                containerStyle={styles.checkboxContainer}
                center
            />
        </Header>
    );
}

export default SubmitHeader;