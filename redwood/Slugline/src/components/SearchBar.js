import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";

import {
    Icon,
    ListItem
} from "react-native-elements"

import { Colors, Fonts, height, Shadow, sizes, width } from "../stylesheet";

function Result({ result, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress(result)}>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Subtitle>
                        {result.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    )
}

const slop = 20;
const hitSlop = {
    top: slop, left: slop, right: slop, bottom: slop
}

export default function CreateEventSearchBar({ 
    onLeftIconPress, onFocus,
    onChangeText, onEndEditing, onSearchResultPress,
    isVirtual, searchValue, results
}) {
    let [isEditing, setIsEditing] = useState(false);

    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, {
                borderBottomLeftRadius: isEditing && results.length > 0 ? 0 : 10,
                borderBottomRightRadius: isEditing && results.length > 0 ? 0 : 10,
            }]}>
                <TouchableOpacity 
                    hitSlop={hitSlop}
                    onPress={onLeftIconPress}
                >
                    <Icon
                        name="chevron-down"
                        type="material-community"
                        style={styles.icon}
                        size={sizes.Icon4}
                    />
                </TouchableOpacity>
                <TextInput
                    onFocus={() => {
                        setIsEditing(true);
                        onFocus();
                    }}
                    onEndEditing={() => {
                        setIsEditing(false);
                        onEndEditing()
                    }}
                    style={styles.input}
                    placeholder={isVirtual ? "Add your event link" : "Search for a location"}
                    onChangeText={onChangeText}
                    value={searchValue}
                    clearTextOnFocus
                    clearButtonMode="while-editing"
                />
                <Icon 
                    name={isVirtual ? "online-prediction" : "location-pin"}
                    type="material"
                    style={styles.icon}
                    size={sizes.Icon4}
                    color={Colors.Red3.rgb}
                />
            </View>
            <View style={styles.results}>
            { isEditing ? 
                results.map((prediction, key) => (
                    <Result 
                        key={prediction?.place_id || key}
                        result={prediction}
                        onPress={onSearchResultPress}
                    />
                ))
                : 
                null 
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        top: height / 15,
        left: (width - (width / 10 * 9)) / 2,
        width: width / 10 * 9,
    },
    inputContainer: {
        backgroundColor: Colors.White.rgb,
        width: "100%",
        height: 50,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        ...Shadow.standard
    },
    input: {
        flexGrow: 1,
        height: "100%",
        ...Fonts.Paragraph2
    },
    icon: {
        flexShrink: 1,
        margin: 5
    },
    results: {
        width: "100%",
        flexGrow: 1
    },
    result: {
        width: "100%",
        height: 40,
        backgroundColor: Colors.White.rgb,
    }
})
