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
} from "react-native-elements";

function SolveResultScreen(props) {
    return (
        <SafeAreaView>
            <Text>Solve Result</Text>
            <Button
                title="Done"
                onPress={() => props.navigation.navigate("Solve")}
            />
        </SafeAreaView>
    )
}

export default SolveResultScreen;