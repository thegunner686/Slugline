import React from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Linking
} from "react-native";

import {
    Icon,
    Divider
} from "react-native-elements"

import { Colors, Fonts, width, height, Shadow, sizes } from "../../stylesheet";

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import { haptic_options } from "../../utils";

export default function ResourceTile({ title, description, link }) {

    const openLink = () => {
        Linking.canOpenURL(link).then(supported => {
            if(supported) {
                Linking.openURL(link);
            } else {
                Alert.alert("Unable to open link.");
            }
        });
    };

    const confirmPress = () => {
        ReactNativeHapticFeedback.trigger("impactLight", haptic_options);
        Alert.alert(
            "Leaving Slugline",
            `Just to confirm, you're going to ${link}`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: openLink
                }
            ]
        );
    };

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={confirmPress}
            >
            <View style={styles.leftContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Icon
                    type="material"
                    name="link"
                    color={Colors.Yellow2.rgb}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 10 * 9,
        height: height / 10,
        backgroundColor: Colors.White.rgb,
        ...Shadow.standard,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 10,
    },
    leftContainer: {
        flex: 5,
        height: height / 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 15
    },
    rightContainer: {
        flex: 1
    },
    title: {
        ...Fonts.Graph1,
        marginBottom: 5,
    },
    description: {
        ...Fonts.Paragraph3
    }
});
