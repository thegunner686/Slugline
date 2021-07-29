import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text
} from "react-native";

import {
    Icon
} from "react-native-elements"

import { Colors, Fonts, height, Shadow, sizes, width } from "../../stylesheet";

import { useGooglePlacesAutocomplete } from "../../stores/useGooglePlacesAutocomplete";

function PlacesResult({ description }) {
    return (
        <View style={styles.result}>
            <Text>{description}</Text>
        </View>
    )
}

export default function CreateEventSearchBar({ 
    type, onLeftIconPress, onRightIconPress, virtual }) {
    let slop = 20;
    let hitSlop = {
        top: slop,
        left: slop,
        right: slop,
        bottom: slop
    };
    
    let [search, setSearch] = useState("");
    let [results, setResults] = useState([]);
    let [placesSession, setPlacesSession] = useState(null);
    let [openGooglePlacesAutocompleteSession] = useGooglePlacesAutocomplete(state => [state.openSession]);
    let [placesResponse] = useGooglePlacesAutocomplete(state => [state.response]);

    useEffect(() => {
        setResults(placesResponse == null ? [] : placesResponse.predictions);
    }, [placesResponse]);

    const onChangeText = async (text) => {
        setSearch(text);
        placesSession.feed(text);
    };

    const onFocus = () => {
        setPlacesSession(openGooglePlacesAutocompleteSession());
    };

    const onEndEditing = () => {
        setPlacesSession(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
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
                    onFocus={onFocus}
                    onEndEditing={onEndEditing}
                    style={styles.input}
                    placeholder={virtual ? "Add your event link" : "Search for a location"}
                    onChangeText={onChangeText}
                    value={search}
                />
                <TouchableOpacity
                    hitSlop={hitSlop}
                    onPress={onRightIconPress}
                >
                    <Icon 
                        name="online-prediction"
                        type="material"
                        style={styles.icon}
                        size={sizes.Icon4}
                        color={virtual ? Colors.Red3.rgb : Colors.Grey3.rgb}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.results}>
                {results.map((prediction) => (
                    <PlacesResult 
                        key={prediction.place_id}
                        description={prediction.description}
                    />
                ))}
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
        height: 40,
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
        backgroundColor: Colors.White.rgb
    }
})
