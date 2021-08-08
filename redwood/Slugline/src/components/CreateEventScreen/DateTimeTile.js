import React, { useState } from "react";

import {
    View, 
    Button, 
    Platform,
    StyleSheet,
    Text
} from 'react-native';

import { width } from "../../stylesheet";

import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimeTile({ datetime, onDateTimeTileChange }) {
    const onDateTimeChange = (event, selectedDate) => {
        const currentDate = selectedDate || datetime;
        onDateTimeTileChange(currentDate);
    };

    // datetime is IOS only
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}></View>
            <DateTimePicker
                value={datetime}
                mode="datetime"
                is24Hour={true}
                display="default"
                onChange={onDateTimeChange}
                style={{ 
                    flex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center"
                }}
            />
            {/* <DateTimePicker
                mode="time"
                value={date}
                is24Hour={true}
                display="default"
                onChange={onDateChange}
                style={{ 
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            /> */}
            <View style={{ flex: 1 }}></View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 10 * 9,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 20,
    }
})
