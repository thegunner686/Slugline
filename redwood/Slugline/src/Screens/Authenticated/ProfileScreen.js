import React from "react";

import {
    SafeAreaView,
    View,
    Text
} from "react-native";

import {
    Button,
    Image,
    Input,
    Icon
} from "react-native-elements";

import { useAuth } from "../../Stores/useAuth";

import styles from "../../Styles/Components/SignInButton";

function ProfileScreen(props) {
    let signOut = useAuth(state => state.signOut);
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Sign Out"
                onPress={signOut}
            />
        </SafeAreaView>
    )
}

export default ProfileScreen;