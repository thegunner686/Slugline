import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Tabs
import BottomTabs from "./BottomTabs";

// Screens
import AskASlugScreen from "../screens/AskASlugScreen";
import CreateEventScreen from "../screens/CreateEventScreen";
import PreviewEventScreen from "../screens/PreviewEventScreen";

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
            mode="modal"
        >
            <Stack.Screen
                name="Events"
                component={BottomTabs}
            />

            <Stack.Screen
                name="CreateEvent"
                component={CreateEventScreen}
            />

            <Stack.Screen
                name="PreviewEvent"
                component={PreviewEventScreen}
            />

            <Stack.Screen
                name="Resources"
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
