import React from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default function CreateEventSearchResultTile({
    result, isVirtual
}) {
    return (
        <View style={styles.container}>
            <Text>{result?.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 100,
        backgroundColor: "red"
    }
})
