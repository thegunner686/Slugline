import React from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context";

import {
    View,
    Text
} from "react-native";

import {
    Button
} from "react-native-elements";

import { useStore } from "../useStore"

function ProfileScreen(props) {
    const signOut = useStore(state => state.signOut)
    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Button
                title="Edit Profile"
                onPress={() => props.navigation.navigate("ProfileEdit")}
            />
            <Button
                title="Sign Out"
                onPress={signOut}
            />
        </SafeAreaView>
    )
}

export default ProfileScreen;