import React from "react";

import { 
    createStackNavigator
} from "@react-navigation/stack";

// Screens
import ProfileScreen from "../screens/ProfileScreen";
import TermsOfUseScreen from "../screens/TermsOfUseScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

import { SignOutButton } from "../components/Profile";
import { Fonts, Colors, Shadow } from "../stylesheet";

const Stack = createStackNavigator();

export default function ResourcesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    ...Fonts.Paragraph5,
                    color: Colors.Black.rgb
                },
                headerStyle: {
                    shadowColor: Colors.Black.rgb,
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    shadowOffset: {
                        width: 0,
                        height: 1
                    }
                }
            }}
        >
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerRight: () => <SignOutButton color={Colors.Black.rgb}/>
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
