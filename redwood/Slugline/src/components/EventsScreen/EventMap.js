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

const UCSC_COORDS = {
    latitude: 36.99279, //08500746,
    longitude: -122.060962, //2303877,
};

const INITIAL_REGION = {
    ...UCSC_COORDS,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02
};

export default function EventMap({ events }) {

    return (
        <MapView
            style={{
                flex: 1
            }}
            userLocationPriority="passive"
            // onPoiClick={onPoiClick}
            // onMarkerPress={onMarkerPress}
            // zoomTapEnabled={false}
            initialRegion={INITIAL_REGION}
            showsUserLocation={true}
            showsBuildings={true}
            showsCompass={true}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
        >
            {events?.map((event) => {
                if(event.isVirtual) return;
                return (
                    <Marker 
                        key={event.id}
                        coordinate={event.location.coordinates}
                    />
                )
            })}
        </MapView>
    )
}
