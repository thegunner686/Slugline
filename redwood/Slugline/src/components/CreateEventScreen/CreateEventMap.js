import React, { useState, useEffect } from "react";

import {
    Icon
} from "react-native-elements";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import EventMarker from "./EventMarker";

import MapStyle from "../../mapstyles/MapStyle";

const haptic_options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};

const UCSC_COORDS = {
    latitude: 36.99279, //08500746,
    longitude: -122.060962, //2303877,
}

export default function CreateEventMap({ height }) {
    let [marker, setMarker] = useState(null);
    let [coordinates, setCoordinates] = useState(UCSC_COORDS);
    let initialRegion = {
        ...UCSC_COORDS,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
    };

    const onPoiClick = (event) => {
        let { name, coordinate } = event.nativeEvent;
        setCoordinates(coordinate);
    };

    const onDoublePress = (event) => {
        console.log("press")
        let { coordinate } = event.nativeEvent;
        setCoordinates(coordinate);
    }

    const onMarkerPress = (event) => {
       ReactNativeHapticFeedback.trigger("impactLight", haptic_options);
    };

    const onMarkerDragStart = (event) => {
        ReactNativeHapticFeedback.trigger("impactHeavy", haptic_options);
    };

    const onMarkerDrag = (event) => {
        setCoordinates(event.nativeEvent.coordinate);
        ReactNativeHapticFeedback.trigger("impactLight", haptic_options);
    };

    const onMarkerDragEnd = (event) => {
        ReactNativeHapticFeedback.trigger("impactMedium", haptic_options);
    };

    return (
        <MapView
            style={{
                flex: 1
            }}
            // provider={PROVIDER_GOOGLE}
            // customMapStyle={MapStyle.Get()}
            userLocationPriority="passive"
            onPoiClick={onPoiClick}
            onMarkerPress={onMarkerPress}
            onDoublePress={onDoublePress}
            zoomTapEnabled={false}
            initialRegion={initialRegion}
            showsUserLocation={true}
            showsBuildings={true}
            showsCompass={true}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
        >
            <EventMarker
                coordinate={coordinates}
                onDragStart={onMarkerDragStart}
                onDrag={onMarkerDrag}
                onDragEnd={onMarkerDragEnd}
            />
        </MapView>
    )
}