import React, { useEffect, useState } from "react";

import {
    SafeAreaView,
    View,
    Text,
} from "react-native";

import styles from "../../Styles/Screens/Authenticated/HomeScreen";

import CreateIntentButton from "../../Components/CreateIntentButton";

import IntentsDisplay from "../../Components/IntentsDisplay";

import { useStore } from "../../Stores/useStore";

function HomeScreen(props) {

    return (
        <SafeAreaView style={styles.container}>
            <IntentsDisplay/>
            <CreateIntentButton
                {...props}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;