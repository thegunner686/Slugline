import React, { useEffect, useState, useCallback } from "react";

import { View, Text, StatusBar } from "react-native";

import {
    Button,
    SpeedDial,
    Icon,
    FAB
} from "react-native-elements"
import { Colors } from "../stylesheet";

import { EventMap, EventsModal, DatePicker } from "../components/Events";

import { getSimpleFormattedDate } from "../utils";

import { useEvents } from "../stores/useEvents";

export default function EventsScreen({ navigation }) {
    let [date, setDate] = useState(getSimpleFormattedDate(new Date()));
    let [events] = useEvents(useCallback(state => [state.events_by_date[date]], [date]));
    let [listenForEventsByDate] = useEvents(state => [state.listenForEventsByDate]);

    useEffect(async () => {
        return listenForEventsByDate(date);
    }, [date]);

    useEffect(() => {
        console.log(events);
    }, [events]);

    const navigateToCreateEvent = () => {
        navigation.navigate("CreateEvent");
    };

    const onDatePickerChange = (item) => {
        setDate(getSimpleFormattedDate(item.date));
        
    };

    return (
        <>
            <StatusBar barStyle="light-content"/>
            <DatePicker onChange={onDatePickerChange}/>
            <EventMap
                events={events}
            />
            {/* <EventsModal
                events={events}
                date={date}
            /> */}
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