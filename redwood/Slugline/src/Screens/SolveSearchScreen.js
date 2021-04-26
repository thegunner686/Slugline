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

function SolveSearchScreen(props) {
    return (
        <SafeAreaView>
            <Text>Solve Search</Text>
            <Button 
                title="Result"
                onPress={() => props.navigation.navigate("SolveResult")}
            />
        </SafeAreaView>
    )
}

export default SolveSearchScreen;