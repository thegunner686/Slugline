import React from "react";

import {
    SafeAreaView,
    View,
    Text,
} from "react-native";

import styles from "../../Styles/Screens/Authenticated/HomeScreen";
import CreateMessageButton from "../../Components/CreateMessageButton";

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                <Text>Map Placeholder</Text>
            </View>
            <CreateMessageButton
                {...props}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;