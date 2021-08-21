import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {
    Input,
    Icon
} from "react-native-elements";
import { Fonts, Colors } from "../../stylesheet";

export default function DetailsTile({ details, onDetailsTileChange }) {

    const onRoomChange = (text) => {
        onDetailsTileChange({
            room: text
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon
                        name="meeting-room"
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Input 
                        placeholder="Add room (Optional)"
                        maxLength={70}
                        containerStyle={{ 
                            paddingLeft: 0, 
                            paddingRight: 0,
                            width: "100%"
                        }}
                        inputStyle={{
                            ...Fonts.Paragraph4,
                            // backgroundColor: name.length > 0 ? Colors.White.rgb : Colors.Grey6.rgb,
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                        }}
                        value={details.room}
                        onChangeText={onRoomChange}
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0
    },
    row: {
        flexGrow: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    iconContainer: {
        flex: 1,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    contentContainer: {
        flex: 9,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    }
})
