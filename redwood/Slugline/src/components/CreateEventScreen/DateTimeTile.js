import React, { useState } from "react";

import {
    View, 
    Button, 
    Platform,
    StyleSheet,
    Text
} from 'react-native';

import {
    Icon
} from "react-native-elements";

import { Fonts, width } from "../../stylesheet";

import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimeTile({ datetime, onDateTimeTileChange }) {
    const onEndTimeChange = (event, selectedTime) => {
        onDateTimeTileChange({
            endTime: selectedTime || datetime.endTime
        });
    };

    const onStartTimeChange = (event, selectedTime) => {
        onDateTimeTileChange({ 
            startTime: selectedTime || datetime.startTime
         });
    };

    // datetime is IOS only
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon
                        name="calendar"
                        type="material-community"
                    />
                </View>
                <View style={styles.contentContainer}>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.labelContainer}>
                    <Text style={Fonts.Paragraph3}>
                    Start Time
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <DateTimePicker
                        value={datetime.startTime}
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={onStartTimeChange}
                        style={{ 
                            flex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center"
                        }}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.labelContainer}>
                    <Text syyle={Fonts.Paragraph3}>
                    End Time
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <DateTimePicker
                        value={datetime.endTime}
                        minimumDate={datetime.startTime}
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={onEndTimeChange}
                        style={{ 
                            flex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center"
                        }}
                    />
                </View>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 20,
    },
    row: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    iconContainer: {
        flex: 1,
        padding: 10
    },
    labelContainer: {
        flex: 3,
        padding: 10
    },
    contentContainer: {
        flex: 9,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    }
})
