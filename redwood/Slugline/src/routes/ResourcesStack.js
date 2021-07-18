import React from "react";

import { 
    createStackNavigator
} from "@react-navigation/stack";

// Screens
import ResourcesScreen from "../screens/ResourcesScreen"
import AskASlugScreen from "../screens/AskASlugScreen"

const Stack = createStackNavigator();

export default function ResourcesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Resources"
                component={ResourcesScreen}
            />
            <Stack.Screen
                name="AskASlug"
                component={AskASlugScreen}
            />
        </Stack.Navigator>
    )
}
