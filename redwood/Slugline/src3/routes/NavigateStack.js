import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Components
import NavigateScreen from "../screens/NavigateScreen";

const Stack = createStackNavigator();

function NavigateStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Navigate"
                component={NavigateScreen}
            />
        </Stack.Navigator>
    )
}

export default NavigateStack;