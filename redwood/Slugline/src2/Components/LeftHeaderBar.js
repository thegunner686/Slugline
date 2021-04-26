import React from "react";

import {
    View,
    Text
} from "react-native";

import {
    Image
} from "react-native-elements";

import styles from "../Styles/Components/LeftHeaderBar";

function LeftHeaderBar(props) {
    return (
        <View style={styles.leftHeaderBarContainer}>
            <Image
                source={require("../../assets/ucsc_logo.png")}
                style={styles.leftHeaderBarLogo}
                placeholderStyle={styles.leftHeaderBarLogoPlaceholder}
            />
            <View style={styles.leftHeaderBarTaglineContainer}>
                <Text style={styles.leftHeaderBarTaglineTitle}>
                    Slugline
                </Text>
                <Text style={styles.leftHeaderBarTagline}>
                    Your personal guide to UCSC
                </Text>
            </View>
        </View>
    )
}

export default LeftHeaderBar;