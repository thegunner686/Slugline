import React from "react";

import { 
    createStackNavigator
} from "@react-navigation/stack";

import {
    Image
} from "react-native-elements";

// Screens
import EventsScreen from "../screens/EventsScreen";

import { Colors, Fonts, width, height } from "../stylesheet";

const Stack = createStackNavigator();

export default function EventsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    // ...Fonts.Paragraph6,
                    // color: Colors.White.rgb,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
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
                    // title: null,
                    // headerTitle: () => (
                    //     <Image 
                    //         source={require("../../assets/slugline_logo_light.png")}
                    //         style={{
                    //             width: 100,
                    //             height: 30,
                    //             resizeMode: "cover"
                    //         }}
                    //     />
                    // )
                    headerShown: false
                }}
                component={EventsScreen}
            />
            
        </Stack.Navigator>
    )
}
