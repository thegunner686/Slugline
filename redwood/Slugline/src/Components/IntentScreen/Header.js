import React from "react";

import {
    Dimensions
} from "react-native";

import {
    Icon,
    CheckBox 
} from "react-native-elements";

import GenericHeader from "../GenericHeader";

import styles from "../../Styles/Components/GenericHeader";
import { Colors } from "../../Styles/stylesheet";

let { width } = Dimensions.get("window");

function Header(props) {
    let { category, onCheckboxPress } = props;
    return (
        <GenericHeader>
            <Icon
                name={category == "SolveIntent" ? "account-search" : "report"}
                type={category == "SolveIntent" ? "material-community" : "material"}
                color={Colors.darkYellow.hex}
                size={width / 5}
                style={styles.icon}
            />
            <CheckBox
                title="Mark this as a Report"
                checked={category == "ReportIntent"}
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