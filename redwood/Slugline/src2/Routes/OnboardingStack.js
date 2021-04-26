import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../Screens/Authenticated/OnboardingScreen";

let Stack = createStackNavigator();

function OnboardingStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        </Stack.Navigator>
    )
}

export default OnboardingStack;