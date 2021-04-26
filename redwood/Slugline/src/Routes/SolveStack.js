import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Components
import SolveScreen from "../screens/SolveScreen";
import SolveSearchScreen from "../screens/SolveSearchScreen";
import SolveResultScreen from "../screens/SolveResultScreen";

const Stack = createStackNavigator();

function SolveStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Solve"
                component={SolveScreen}
            />
            <Stack.Screen
                name="SolveSearch"
                component={SolveSearchScreen}
            />
            <Stack.Screen
                name="SolveResult"
                component={SolveResultScreen}
            />
        </Stack.Navigator>
    )
}

export default SolveStack;