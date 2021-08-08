import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {
    Input
} from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../stylesheet";

export default function AskASlugScreen({ onBlurbed }) {
    let [text, setText] = useState("enskgnesg n");

    const onBlurb = (val) => {
        setText(val);
    };
    
    return (
        <SafeAreaView>
            <Text>Ask a Slug!</Text>

            <Input 
                style={styles.input}
                placeholder="MY placeh"
                value={text}
                onChangeText={onBlurb}
            />

            <Text>{ text }</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.Red3.rgb
    }
})
