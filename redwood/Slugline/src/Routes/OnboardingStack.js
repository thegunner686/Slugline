import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Screen
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createStackNavigator()

function OnboardingStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
            />
        </Stack.Navigator>
    );
}

export default OnboardingStack;
