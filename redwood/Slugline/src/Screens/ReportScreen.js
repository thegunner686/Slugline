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

function ReportScreen(props) {
    return (
        <SafeAreaView>
            <Text>Report</Text>
            <Button
                title="Create Report"
                onPress={() => props.navigation.navigate("ReportQuestion")}
            />
            <Button
                title="View Report"
                onPress={() => props.navigation.navigate("ReportView")}
            />
        </SafeAreaView>
    )
}

export default ReportScreen;