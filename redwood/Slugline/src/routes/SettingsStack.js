import React from "react";

import { 
    createStackNavigator
} from "@react-navigation/stack";

// Screens
import SettingsScreen from "../screens/SettingsScreen";
import TermsOfUseScreen from "../screens/TermsOfUseScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

import { SignOutButton } from "../components/Settings"

const Stack = createStackNavigator();

export default function ResourcesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerRight: () => <SignOutButton />
                }}
            />
            <Stack.Screen
                name="TermsOfUse"
                component={TermsOfUseScreen}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
            />
        </Stack.Navigator>
    )
}
