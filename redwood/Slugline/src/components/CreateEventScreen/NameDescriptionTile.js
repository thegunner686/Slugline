import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {
    Input,
    Icon,
    Divider
} from "react-native-elements";
import { Fonts, Colors } from "../../stylesheet";

export default function NameDescriptionTile({ name, description, onNameDescriptionTileChange }) {

    const onNameChange = (text) => {
        onNameDescriptionTileChange({
            name: text,
            description
        });
    };

    const onDescriptionChange = (text) => {
        onNameDescriptionTileChange({
            name,
            description: text
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon
                        name="title"
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Input 
                        placeholder="Add title"
                        maxLength={140}
                        containerStyle={{ 
                            paddingLeft: 0, 
                            paddingRight: 0,
                            height: 40, 
                            width: "100%",
                        }}
                        inputStyle={{
                            ...Fonts.SubHeader3,
                            // backgroundColor: name.length > 0 ? Colors.White.rgb : Colors.Grey6.rgb,
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                        }}
                        value={name}
                        onChangeText={onNameChange}
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon
                        name="text"
                        type="material-community"
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Input 
                        placeholder="Add description"
                        maxLength={280}
                        containerStyle={{ 
                            paddingLeft: 0, 
                            paddingRight: 0,
                            minHeight: 40, 
                            width: "100%",
                        }}
                        inputStyle={{
                            ...Fonts.Paragraph4,
                            minHeight: 40
                            // backgroundColor: description.length > 0 ? Colors.White.rgb : Colors.Grey6.rgb,
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                        }}
                        value={description}
                        multiline={true}
                        onChangeText={onDescriptionChange}
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
        marginTop: 5,
        marginBottom: 20,
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
