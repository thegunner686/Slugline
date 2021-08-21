import React from "react";

import { 
    createStackNavigator
} from "@react-navigation/stack";

// Screens
import ManageEventsScreen from "../screens/ManageEventsScreen"

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
                name="ManageEvents"
                component={ManageEventsScreen}
            />
        </Stack.Navigator>
    )
}
