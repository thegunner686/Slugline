import React from "react";

import { View, Text } from "react-native";

import {
    Button
} from "react-native-elements"

import { EventMap } from "../components/Events";

export default function EventsScreen({ navigation }) {

    const navigateToCreateEvent = () => {
        navigation.navigate("CreateEvent");
    }

    return (
        <>
            <EventMap/>
            <Button
                title="create event"
                onPress={navigateToCreateEvent}
            />
        </>
    )
}