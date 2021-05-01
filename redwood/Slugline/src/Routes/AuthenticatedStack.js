import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

import {
    Icon
} from "react-native-elements";

// Tabs
import BottomTabs from "./BottomTabs";

// Screens
import SolveSearchScreen from "../screens/SolveSearchScreen";
import CampusUpdateDetailsScreen from "../screens/CampusUpdateDetailsScreen"

import { Colors, Fonts } from "../stylesheet";

const Stack = createStackNavigator()

// Fade In Transition
const FadeInTransition = {
    transitionSpec: {
        open: {
            animation: "timing",
            config: { duration: 200 }
        },
        close: {
            animation: "timing",
            config: { duration: 200 }
        }
    },
    cardStyleInterpolator: ({ current: { progress }}) => {
        return {
            cardStyle: {
                opacity: progress
            }
        }
    }
}

function AuthenticatedStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Solve"
                component={BottomTabs}
            />

            <Stack.Screen
                name="SolveSearch"
                component={SolveSearchScreen}
                options={{
                    ...FadeInTransition
                }}
            />

            <Stack.Screen
                name="CampusUpdateDetails"
                component={CampusUpdateDetailsScreen}
            />

            <Stack.Screen
                name="Navigate"
                component={BottomTabs}
            />

            <Stack.Screen
                name="Report"
                component={BottomTabs}
            />

            <Stack.Screen
                name="Profile"
                component={BottomTabs}
            />
        </Stack.Navigator>
    );
}

export default AuthenticatedStack;
