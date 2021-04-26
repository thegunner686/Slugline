import React from "react";

import { enableScreens } from "react-native-screens";

import {
    createSharedElementStackNavigator
} from "react-navigation-shared-element";

enableScreens();

// Screens
import SignInScreen from "../screens/SignInScreen";
import SignInTroubleScreen from "../screens/SignInTroubleScreen";

const Stack = createSharedElementStackNavigator()

function SignInStack(props) {
    return (
        <Stack.Navigator
            headerMode="none"
            mode="modal"
        >
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
            />
            <Stack.Screen
                name="SignInTrouble"
                component={SignInTroubleScreen}
                
                // options={{
                //     transitionSpec: {
                //         open: {
                //             animation: "timing",
                //             config: { duration: 200 }
                //         },
                //         close: {
                //             animation: "timing",
                //             config: { duration: 200 }
                //         }
                //     },
                //     cardStyleInterpolator: ({ current: { progress }}) => {
                //         return {
                //             cardStyle: {
                //                 opacity: progress
                //             }
                //         }
                //     }
                // }}
            />
        </Stack.Navigator>
    );
}

export default SignInStack;
