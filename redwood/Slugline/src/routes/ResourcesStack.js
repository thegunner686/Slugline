import React from "react";

import { 
    createStackNavigator
} from "@react-navigation/stack";

// Screens
import ResourcesScreen from "../screens/ResourcesScreen"
import AskASlugScreen from "../screens/AskASlugScreen"

import { Fonts, Colors } from "../stylesheet";

const Stack = createStackNavigator();

export default function ResourcesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    ...Fonts.Paragraph5,
                    color: Colors.Black.rgb
                },
                headerStyle: {
                    shadowColor: Colors.Black.rgb,
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    shadowOffset: {
                        width: 0,
                        height: 1
                    }
                }
            }}
        >
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
