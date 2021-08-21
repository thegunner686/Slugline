import React, { useEffect, useState } from "react";

import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import {
    Button,
    SpeedDial,
    Icon,
    FAB,
    ListItem,
    Avatar
} from "react-native-elements";

import { Colors, Fonts } from "../stylesheet";

import { useEvents } from "../stores/useEvents";
import { useAuth } from "../stores/useAuth";

import { toMonthDayDate, toAMPMTime } from "../utils"

export default function ManageEventsScreen({ navigation }) {
    let [user] = useAuth(state => [state.user]);
    let [eventsMap, listenForEventsByUser] = useEvents(state => [state.events_by_user, state.listenForEventsByUser]);
    let [setEventEdit] = useEvents(state => [state.setEventEdit]);
    let [events, setEvents] = useState([]);
    useEffect(() => {
        return listenForEventsByUser(user);
    }, [user.events]);

    useEffect(() => {
        setEvents(Object.keys(eventsMap).map((key) => {
            return eventsMap[key]
        }));
    }, [eventsMap]);

    useEffect(() => {
        console.log(events)
    }, [events])

    const navigateToCreateEvent = () => {
        navigation.navigate("CreateEvent");
    };

    const navigateToEditEvent = (event) => {
        setEventEdit(event);
        navigation.navigate("EditEvent");
    };

    return (
        <>
        <ScrollView>
            {events.reverse().map((event) => (
                <ListItem onPress={() => navigateToEditEvent(event)} key={event.id} Component={TouchableOpacity} bottomDivider>
                    <Avatar source={{uri: event.photoURL }} />
                    <ListItem.Content>
                        <ListItem.Title>{event.name}</ListItem.Title>
                        <ListItem.Subtitle>{`${toMonthDayDate(event.startTime)} from ${toAMPMTime(event.startTime)} to ${toAMPMTime(event.endTime)}`}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </ScrollView>
        <FAB 
            placement="right"
            color={Colors.Red3.rgb}
            onPress={navigateToCreateEvent}
            icon={
                <Icon 
                    name="add"
                    color={Colors.White.rgb}
                />
            }
        />
        </>
    )
}
