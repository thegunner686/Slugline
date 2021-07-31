import React, { useState, useEffect, useRef } from "react";

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

export default function CreateEventMap({ 
    height, result, onMarkerMove
}) {
    let [marker, setMarker] = useState(null);
    let [coordinates, setCoordinates] = useState(UCSC_COORDS);
    const mapRef = useRef(null);
    let initialRegion = {
        ...UCSC_COORDS,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
    };

    const animateToAboveCoordinate = (coordinate) => {
        const view_region = {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
        };
        mapRef.current?.animateToRegion(view_region);
    };

    useEffect(() => {
        if(result != null && result.location != null && result.address != null) {
            setCoordinates(result.location);
            animateToAboveCoordinate(result.location);
        }
    }, [result]);

    const onPoiClick = (event) => {
        let { name, coordinate } = event.nativeEvent;
        setCoordinates(coordinate);
    };

    const onDoublePress = (event) => {
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
        onMarkerMove(event.nativeEvent.coordinate);
        ReactNativeHapticFeedback.trigger("impactLight", haptic_options);
    };

    const onMarkerDragEnd = (event) => {
        ReactNativeHapticFeedback.trigger("impactMedium", haptic_options);
    };

    return (
        <MapView
            ref={mapRef}
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