import React from "react";

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from "react-native";

import { useAuth } from "../../Stores/useAuth"
import styles from "../../Styles/Screens/Authenticated/HomeScreen";
import SignOutButton from "../../Components/SignOutButton";

function HomeScreen(props) {
    let user = useAuth(state => state.user);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Profile Screen</Text>
            <SignOutButton/>
        </SafeAreaView>
    )
}

export default HomeScreen;