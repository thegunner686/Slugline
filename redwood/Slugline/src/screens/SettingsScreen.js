import React from "react";

import { View, Text } from "react-native";

import {
    SafeAreaView
} from "react-native-safe-area-context";

import { SignOutButton } from "../components/Settings"

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <SignOutButton />
        </SafeAreaView>
    )
}