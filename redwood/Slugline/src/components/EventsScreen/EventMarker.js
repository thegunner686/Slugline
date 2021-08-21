import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { Marker } from "react-native-maps";

import { Colors, Fonts, Shadow, rgba } from '../../stylesheet';

import { toAMPMTime } from '../../utils';

export default function EventMarker({ event, selected }) {
    return (
        <Marker 
            identifier={event.id}
            coordinate={event.location.coordinates}
        >
            <View style={styles.container}>
                <View style={[styles.mark, {
                    backgroundColor: selected ? Colors.Black.rgb : Colors.White.rgb
                }]}>
                    <Text style={{
                        ...Fonts.Label1,
                        fontSize: 12,
                        color: selected ? Colors.White.rgb : Colors.Black.rgb
                    }}>
                        {toAMPMTime(event.startTime)}
                    </Text>
                </View>
            </View>
        </Marker>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 40,
        padding: 5,
    },
    mark: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.White.rgb,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.Black.rgb,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 1
    }
});
