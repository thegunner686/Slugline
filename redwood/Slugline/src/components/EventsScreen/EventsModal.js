import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {
    Image,
    Icon
} from "react-native-elements";

import { Modalize } from "react-native-modalize";

import { toAMPMTime, toMonthDayDate } from "../../utils";

import { height, width, Colors, Fonts, Shadow } from "../../stylesheet";

function ModalHeader({ date }) {
    return (
        <View style={styles.header}>
            <Text style={Fonts.SubHeader2}>Events on {toMonthDayDate(new Date(date))}</Text>
        </View>
    );
}

function EventItem({ event }) {
    let time = toAMPMTime(event.datetime.toDate());
    return (
        <TouchableOpacity style={styles.eventContainer}>
            <View style={{ flexShrink: 1}}>
                <Image 
                    source={{ uri: event.photoURL }}
                    style={{
                        height: height / 10,
                        width: height / 10,
                        resizeMode: "cover",
                        borderRadius: 10
                    }}
                />
            </View>
            <View style={{ 
                flexGrow: 1,
                flexDirection: "column",
                paddingLeft: 10
            }}>
                <View style={{ flexGrow: 1 }}>
                    <Text style={Fonts.Graph2}>{event.name}</Text>
                </View>
                <View style={{ 
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}>
                    <Icon
                        name="timer"
                    />
                    <Text>{time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function EventsModal({ events, date }) {
    let [eventDate, setEventDate] = useState(date);

    useEffect(() => {
        setEventDate(date);
    }, [date]);

    const renderEvent = ({ item }) => {
        return (
            <EventItem event={item} />
        )
    };

    return (
        <Modalize
            withHandle={true}
            alwaysOpen={50}
            snapPoint={100}
            handlePosition="outside"
            modalHeight={height / 10 * 7}
            HeaderComponent={
                <ModalHeader date={eventDate}/>
            }

            flatListProps={{
                data: events,
                renderItem: renderEvent,
                keyExtractor: (item) => item.id,
            }}

            modalStyle={styles.modalStyle}
        />
    );
}

const styles = StyleSheet.create({
    modalStyle: {
        padding: 10,
    },
    eventContainer: {
        width: width / 10 * 9,
        height: height / 10,
        borderRadius: 10,
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
        marginBottom: height / 20
    }
});
