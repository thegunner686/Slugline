import React from "react";

import {
    View
} from "react-native";

import styles from "../Styles/Components/GenericHeader";

function GenericHeader(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

export default GenericHeader;