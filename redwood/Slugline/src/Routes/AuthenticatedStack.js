import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Tabs
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator()

function AuthenticatedStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Solve"
                component={BottomTabs}
            />

            <Stack.Screen
                name="Navigate"
                component={BottomTabs}
            />

            <Stack.Screen
                name="Report"
                component={BottomTabs}
            />

            <Stack.Screen
                name="Profile"
                component={BottomTabs}
            />
        </Stack.Navigator>
    );
}

export default AuthenticatedStack;
