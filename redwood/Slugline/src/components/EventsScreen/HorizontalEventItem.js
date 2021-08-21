import React from "react";

import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ActivityIndicator
} from "react-native";

import {
    Icon,
    Chip,
    Image,
    Divider
} from "react-native-elements";

import { width, height, Colors, rgba, Fonts, Shadow, sizes } from "../../stylesheet";

import { toAMPMTime, toMonthDayDate } from "../../utils";

export default function EventItem({ event, onPress, showEventLocation }) {
    let { photoURL, name, organizer, description, location, startTime, isVirtual } = event;
    let time = toAMPMTime(event.startTime);
    return (
        <TouchableOpacity onPress={() => onPress(event)} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{ uri: photoURL }}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={Fonts.Paragraph2}>{event.name}</Text>
                <Text style={{
                    ...Fonts.Label4,
                    fontSize: 12,
                }}>Hosted by {event.organizer.name}</Text>
                <View style={styles.iconContent}>
                    <Icon
                        name="location-pin"
                        size={sizes.Icon6}
                    />
                    <Text style={Fonts.Label4}> {event.location.name}</Text>
                </View>
                {
                    !isVirtual &&
                    <View style={styles.iconContent}>
                        <Icon
                            name="timer"
                            size={sizes.Icon6}
                        />
                        <Text style={Fonts.Label4}> {toAMPMTime(event.startTime)} to {toAMPMTime(event.endTime)}</Text>
                    </View>
                }
                {
                    isVirtual &&
                    <View style={styles.iconContent}>
                        <Icon
                            name="online-prediction"
                            size={sizes.Icon6}
                        />
                        <Text style={Fonts.Label4}>Virtual</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width / 10 * 9,
        height: height / 9,
        margin: width / 10 / 2,
        ...Shadow.standard,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: "100%",
        height: "100%"
    },
    contentContainer: {
        flex: 2,
        backgroundColor: Colors.White.rgb,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    iconContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 2
    }
});
