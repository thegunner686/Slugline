import React from "react";

import {
    Icon,
    CheckBox,
    Image
} from "react-native-elements";

import GenericHeader from "../GenericHeader";

import styles from "../../Styles/Components/IntentSubmitScreen/Header";
import { Colors } from "../../Styles/stylesheet";

function Header(props) {
    let { photoURL, anonymous, onCheckboxPress } = props;
    return (
        <GenericHeader>
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
        </GenericHeader>
    );
}

export default Header;