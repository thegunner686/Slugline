import React, { useEffect, useRef, useState, useCallback } from "react";

import { View, Text, StatusBar } from "react-native";

import {
    Button,
    SpeedDial,
    Icon,
    FAB
} from "react-native-elements"
import { Colors, height } from "../stylesheet";

import { EventMap, EventsModal, HorizontalEventList, DatePicker, Logo } from "../components/Events";

import { getSimpleFormattedDate } from "../utils";

import { useEvents } from "../stores/useEvents";

export default function EventsScreen({ navigation }) {
    let [date, setDate] = useState(getSimpleFormattedDate(new Date()));
    let [events] = useEvents(useCallback(state => [state.events_by_date[date]], [date]));
    let [setEventView] = useEvents(state => [state.setEventView]);
    let [listenForEventsByDate] = useEvents(state => [state.listenForEventsByDate]);
    let [modalOffset, setModalOffset] = useState(0);
    const horizontalEventListRef = useRef(null);
    const eventMapRef = useRef(null);
    const eventsModalRef = useRef(null);

    useEffect(async () => {
        return listenForEventsByDate(date);
    }, [date]);

    // useEffect(() => {
    //     console.log(events);
    // }, [events]);

    const onDatePickerChange = (item) => {
        setDate(getSimpleFormattedDate(item.date));
    };
    
    const navigateToEventView = (event) => {
        // console.log(event);
        setEventView(event);
        navigation.navigate("ViewEvent");
    };

    const animateToAboveCoordinate = (coordinate) => {
        const view_region = {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
        };
        eventMapRef.current?.animateToRegion(view_region);
    };

    const scrollToEvent = (event) => {
        horizontalEventListRef.current?.scrollToItem({
            animated: true,
            item: event
        });
    };

    const onEventMarkerPress = (event_id) => {
        const item = events.find(event => event.id == event_id);
        // animateToAboveCoordinate(item.location.coordinates);
        scrollToEvent(item);
    };

    const showEventLocation = (event) => {
        eventsModalRef.current?.close("alwaysOpen");
        animateToAboveCoordinate(event.location.coordinates);
        scrollToEvent(event);
    };

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <Logo />
            <DatePicker onChange={onDatePickerChange}/>
            <EventMap
                ref={eventMapRef}
                events={events}
                onEventMarkerPress={onEventMarkerPress}
            />
            <HorizontalEventList 
                ref={horizontalEventListRef}
                offset={modalOffset} 
                events={events} 
                navigateToEventView={navigateToEventView}
                showEventLocation={showEventLocation}
            />
            <EventsModal
                ref={eventsModalRef}
                setModalOffset={setModalOffset}
                events={events}
                date={date}
                navigateToEventView={navigateToEventView}
                showEventLocation={showEventLocation}
            />
            <View style={{ height: height / 20 }}></View>
        </>
    )
}