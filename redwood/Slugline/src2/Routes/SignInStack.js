import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../Screens/SignInScreen";

let Stack = createStackNavigator();

function SignInStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
        </Stack.Navigator>
    )
}

export default SignInStack;