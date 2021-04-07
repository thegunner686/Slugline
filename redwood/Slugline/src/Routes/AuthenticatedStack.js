import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

function AuthenticatedStack(props) {
    return (
        <Stack.Navigator
            options={{
            headerShown: false,
            }}
            mode="modal"
        >
            <Stack.Screen
                name="HomeStack"
                options={{
                    headerShown: false
                }}
                children={(props) => <HomeStack {...props} /> }
            />
      </Stack.Navigator>
    )
}

export default AuthenticatedStack;