import React from "react";

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from "react-native";

import {
    Button,
    Image,
    Icon
} from "react-native-elements";

import { useAuth } from "../../Stores/useAuth";

import styles from "../../Styles/Screens/Authenticated/HomeScreen";

function HomeScreen(props) {
    let user = useAuth(state => state.user);
    let signOut = useAuth(state => state.signOut);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                <Text>Map Placeholder</Text>
                <Button
                    title="sign out"
                    onPress={signOut}
                />
            </View>
            <Button
                title=" Slugline Message"
                type="solid"
                titleStyle={styles.msgBtnTitle}
                containerStyle={styles.msgBtnContainer}
                buttonStyle={styles.msgBtn}
                icon={
                    <Icon
                        name="plus"
                        type="material-community"
                        color="white"
                    />
                }
                onPress={() => {
                    console.log("press")
                }}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;