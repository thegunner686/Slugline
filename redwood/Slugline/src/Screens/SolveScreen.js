import React from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context";

import {
    View,
    Text
} from "react-native";

import {
    Button
} from "react-native-elements"

function SolveScreen(props) {
    return (
        <SafeAreaView>
            <Text>Solve</Text>
            <Button
                title="Search"
                onPress={() => props.navigation.navigate("SolveSearch")}
            />
        </SafeAreaView>
    )
}

export default SolveScreen;