import React from "react";

import { 
    createStackNavigator
} from "@react-navigation/stack";

// Screens
import EventsScreen from "../screens/EventsScreen";

import { Colors, Fonts } from "../stylesheet";

const Stack = createStackNavigator();

export default function EventsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    ...Fonts.Paragraph6,
                    color: Colors.White.rgb
                },
                headerStyle: {
                    // shadowColor: Colors.Black.rgb,
                    // shadowOpacity: 0.2,
                    // shadowRadius: 5,
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 1
                    // }
                    backgroundColor: Colors.Blue1.rgb,
                    borderBottomWidth: 0
                }
            }}
        >
            <Stack.Screen
                name="Events"
                options={{
                    title: "Search for Events by Weekday"
                }}
                component={EventsScreen}
            />
            
        </Stack.Navigator>
    )
}
