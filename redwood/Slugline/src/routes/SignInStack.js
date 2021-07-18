import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Screens
import SignInScreen from "../screens/SignInScreen";

const Stack = createStackNavigator()

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

function SignInStack(props) {
    return (
        <Stack.Navigator
            headerMode="none"
            mode="modal"
        >
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    ...FadeInTransition
                }}
            />
        </Stack.Navigator>
    );
}

export default SignInStack;
