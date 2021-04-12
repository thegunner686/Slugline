import React from "react";

import {
    View,
    Text
} from "react-native";

import styles from "../../Styles/Components/MessageScreen/Header";

function Header(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

export default Header;