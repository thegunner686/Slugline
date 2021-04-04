import React from "react";

import {
    SafeAreaView,
    View,
    Text
} from "react-native";

import LogoutButton from "../Components/LogoutButton"

import { useAuth } from "../Stores/useAuth"

function HomeScreen() {
    let user = useAuth(state => state.user);
    return (
        <SafeAreaView>
            <Text>Home</Text>
            { user == null ?
                <Text>user is null</Text>
                :
                <Text>{user.email}</Text>
            }
            <LogoutButton/>
        </SafeAreaView>
    )
}

export default HomeScreen;