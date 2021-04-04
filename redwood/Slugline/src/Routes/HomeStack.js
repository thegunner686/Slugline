import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";

let Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack;