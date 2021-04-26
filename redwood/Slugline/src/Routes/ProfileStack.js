import React from "react";

import {
    createStackNavigator
} from "@react-navigation/stack";

// Components
import ProfileScreen from "../screens/ProfileScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";

const Stack = createStackNavigator();

function ProfileStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
            />
            <Stack.Screen
                name="ProfileEdit"
                component={ProfileEditScreen}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack;