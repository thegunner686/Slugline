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

function ReportQuestionScreen(props) {
    return (
        <SafeAreaView>
            <Text>Report Question</Text>
            <Button
                title="Create Report"
                onPress={() => props.navigation.navigate("ReportCreate")}
            />
        </SafeAreaView>
    )
}

export default ReportQuestionScreen;