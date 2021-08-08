import React from "react";

import {
    StyleSheet
} from "react-native";

import {
    Button,
    Icon
} from "react-native-elements";

import { Colors, Fonts, width } from "../../stylesheet";

export default function PreviewEventButton({ onPress }) {
    return (
        <Button 
            onPress={onPress}
            title="Preview Event"
            buttonStyle={styles.button}
            icon={
                <Icon 
                    name="chevron-right"
                    color={Colors.White.rgb}
                />
            }
            iconRight
        />
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        width: width / 10 * 9,
        backgroundColor: Colors.Blue3.rgb,
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 40
    }
})
