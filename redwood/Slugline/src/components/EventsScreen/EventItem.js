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
} from "react-native-elements";

import FastImage from 'react-native-fast-image';

import { width, height, Colors, rgba, Fonts, Shadow, sizes } from "../../stylesheet";

import { toAMPMTime, toMonthDayDate } from "../../utils";

export default function EventItem({ event, onPress, showEventLocation }) {
    let { photoURL, name, organizer, description, location, startTime, isVirtual } = event;
    let time = toAMPMTime(event.startTime);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.host}>Hosted by {organizer.name}</Text>
            </View>
            <ImageBackground
                // containerStyle={{ width: "100%", height: "50%"}}
                imageStyle={{ 
                    width: "100%", 
                    height: "100%", 
                    borderBottomLeftRadius: 5, 
                    borderBottomRightRadius: 5 
                }}
                style={{ 
                    width: "100%", 
                    height: "60%", 
                    display: "flex", 
                    justifyContent: "center", 
                    backgroundColor: Colors.Grey6.rgb, 
                    borderBottomLeftRadius: 5, 
                    borderBottomRightRadius: 5
                }}
                source={{ uri: photoURL }}
            >
                <TouchableOpacity style={styles.viewButton} onPress={() => onPress(event)}>
                    <Text style={Fonts.Paragraph4}>View Event Details</Text>
                    <Icon 
                        name="chevron-right"
                    />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.chippedContent}>
                <FastImage 
                    source={{ uri: organizer.picture }}
                    style={{ 
                        width: sizes.Icon3,
                        height: sizes.Icon3,
                        borderRadius: 50
                    }}
                    containerStyle={{
                        ...Shadow.standard,
                        marginRight: 5
                    }}
                    placeholderStyle={{
                        backgroundColor: "transparent"
                    }}
                />
                <Chip
                    containerStyle={styles.chipContainer}
                    title={time}
                    icon={{
                    name: "timer",
                    type: "material",
                    size: sizes.Icon5,
                    color: 'white',
                    }}
                />
                {!isVirtual &&
                    <Chip
                        containerStyle={styles.chipContainer}
                        title={location?.name || "Custom Location"}
                        titleStyle={{ color: Colors.White.rgb }}
                        buttonStyle={{ borderColor: Colors.Red3.rgb, backgroundColor: rgba(Colors.Red3)(0.9) }}
                        icon={{
                            name: "location-pin",
                            type: "material",
                            size: sizes.Icon5,
                            color: "white",
                        }}
                        onPress={() => showEventLocation(event)}
                        type="outline"
                    />
                }
                {isVirtual &&
                    <Chip
                        containerStyle={styles.chipContainer}
                        title="Virtual"
                        buttonStyle={{ backgroundColor: Colors.Green3.rgb }}
                        icon={{
                            name: "online-prediction",
                            type: "material",
                            size: sizes.Icon5,
                            color: "white",
                        }}
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width / 10 * 9,
        height: height / 4,
        margin: width / 10 / 2,
        ...Shadow.standard,
        borderRadius: 5,
    },
    background: {
        width: "100%",
        height: "70%",
        margin: 0,
        resizeMode: "cover",
    },
    header: {
        width: "100%",
        backgroundColor: Colors.White.rgb,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    name: {
        ...Fonts.Graph4,
        alignSelf: "center",
        margin: 5
    },
    host: {
        alignSelf: "center",
        ...Fonts.Paragraph4
    },
    chippedContent: {
        flexDirection: "row",
        height: "20%",
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    chipContainer: {
        marginHorizontal: 5,
    },
    viewButton: {
        width: "50%",
        alignSelf: "flex-end",
        backgroundColor: rgba(Colors.White)(0.9),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    }
});
