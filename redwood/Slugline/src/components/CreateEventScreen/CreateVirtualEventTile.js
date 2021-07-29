import React from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { 
    Button
} from "react-native-elements"

import { Colors, Fonts, sizes, rgba } from "../../stylesheet"

export default function CreateVirtualEventTile() {
    return (
        <View style={styles.container}>
            <View style={styles.tile}>
                <Text style={styles.title}>(Virtual) Cornucopia</Text>
                {/* <Text style={styles.subtitle}>(noun)</Text> */}
                <Text style={styles.label}>Definition (n.)</Text>
                <Text style={styles.definition}>1: An abundance of good things of a specified kind.</Text>
                <Text style={styles.label}>Alternate Definition (n.)</Text>
                <Text style={styles.definition}>2: An online gathering of Slugs.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Blue3.rgb,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 200
    },
    tile: {
        width: "90%",
        height: "50%",
        backgroundColor: rgba(Colors.White)(0.1),
        borderRadius: 20,
        display: "flex",
        alignItems: "flex-start",
        padding: 10
    },
    title: {
        color: Colors.White.rgb,
        ...Fonts.Header2
    },
    subtitle: {
        color: Colors.White.rgb,
        ...Fonts.Graph3
    },
    label: {
        color: Colors.White.rgb,
        ...Fonts.Paragraph5,
        marginVertical: 5
    },
    definition: {
        color: Colors.White.rgb,
        ...Fonts.Graph4,
        marginVertical: 5
    }
})
