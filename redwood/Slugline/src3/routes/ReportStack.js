import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Components
import ReportScreen from "../screens/ReportScreen";
import ReportQuestionScreen from "../screens/ReportQuestionScreen";
import ReportCreateScreen from "../screens/ReportCreateScreen";
import ReportViewScreen from "../screens/ReportViewScreen";

const Stack = createStackNavigator();

function ReportStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Report"
                component={ReportScreen}
            />
            <Stack.Screen
                name="ReportQuestion"
                component={ReportQuestionScreen}
            />
            <Stack.Screen
                name="ReportCreate"
                component={ReportCreateScreen}
            />
            <Stack.Screen
                name="ReportView"
                component={ReportViewScreen}
            />
        </Stack.Navigator>
    )
}

export default ReportStack;