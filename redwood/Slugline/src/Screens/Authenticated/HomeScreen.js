import React from "react";

import {
    SafeAreaView,
    View,
    Text,
} from "react-native";

import styles from "../../Styles/Screens/Authenticated/HomeScreen";
import CreateIntentButton from "../../Components/CreateIntentButton";

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                <Text>Map Placeholder</Text>
            </View>
            <CreateIntentButton
                {...props}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;