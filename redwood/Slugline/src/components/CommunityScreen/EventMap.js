import React, { useEffect, useRef } from "react";

import {
    Icon
} from "react-native-elements";

import MapView, { Marker } from "react-native-maps";

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const haptic_options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};

export default function EventMap() {
    return (
        <MapView
            style={{
                flex: 1
            }}
        >

        </MapView>
    )
}
