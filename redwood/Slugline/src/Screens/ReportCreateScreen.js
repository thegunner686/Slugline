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

function ReportCreateScreen(props) {
    return (
        <SafeAreaView>
            <Text>Report Create</Text>
            <Button
                title="Done"
                onPress={() => props.navigation.navigate("Report")}
            />
        </SafeAreaView>
    )
}

export default ReportCreateScreen;