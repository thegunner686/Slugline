import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated
} from "react-native";

import {
    Image,
    Icon
} from "react-native-elements";

import { Modalize } from "react-native-modalize";

import EventItem from "./EventItem";

import { toAMPMTime, toMonthDayDate } from "../../utils";

import { height, width, Colors, Fonts, Shadow, rgba } from "../../stylesheet";

function ModalHeader({ numEvents }) {
    let message;
    if(numEvents == 0) {
        message = "No Events Found";
    } else if(numEvents == 1) {
        message = "One Event Found";
    } else {
        message = `${numEvents} Events Found`
    }
    return (
        <View style={styles.header}>
            <Text style={{
                ...Fonts.SubHeader5,
                color: Colors.Black.rgb
            }}>Explore Events</Text>
        </View>
    );
}

const EventsModal = React.forwardRef(({ events, date, navigateToEventView, setModalOffset, showEventLocation }, ref) => {
    let [eventDate, setEventDate] = useState(date);

    // useEffect(() => {
    //     ref.current?.open(50);
    // }, []);

    const offset = new Animated.Value(0);

    offset.addListener(({ value }) => {
        setModalOffset(value)
    });

    useEffect(() => {
        setEventDate(date);
    }, [date]);

    const renderEvent = ({ item }) => {
        return <EventItem event={item} onPress={navigateToEventView} showEventLocation={showEventLocation}/>;
    };

    return (
        <Modalize
            ref={ref}
            withHandle={true}
            handlePosition="inside"
            modalHeight={height / 10 * 7}
            alwaysOpen={50}
            HeaderComponent={
                <ModalHeader numEvents={events?.length || 0}/>
            }
            flatListProps={{
                data: events,
                renderItem: renderEvent,
                keyExtractor: (item) => item.id,
            }}
            panGestureAnimatedValue={offset}
            onPositionChange={(pos) => {
                offset.setValue(pos == 'initial' ? 0 : 1);
            }}
            // overlayStyle={{ backgroundColor: Colors.White.rgb }}
            modalStyle={styles.modalStyle}
            closeSnapPointStraightEnabled={false}
        />
    );
});

const styles = StyleSheet.create({
    modalStyle: {
        backgroundColor: Colors.Grey6.rgb
    },
    eventContainer: {
        width: "100%",
        height: height / 10,
        backgroundColor: Colors.White.rgb,
        borderColor: Colors.Grey6.rgb,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        // ...Shadow.standard,
        alignSelf: "center",
        margin: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        backgroundColor: Colors.White.rgb,
        width: "100%",
        height: height / 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.Grey5.rgb
    }
});

export default EventsModal;
