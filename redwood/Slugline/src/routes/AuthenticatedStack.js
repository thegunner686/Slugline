import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Tabs
import BottomTabs from "./BottomTabs";

// Screens
import AskASlugScreen from "../screens/AskASlugScreen";

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
                name="Community"
                component={BottomTabs}
            />

            <Stack.Screen
                name="Resources"
                component={BottomTabs}
            />

            <Stack.Screen
                name="Settings"
                component={BottomTabs}
            />

        </Stack.Navigator>
    );
}

export default AuthenticatedStack;
