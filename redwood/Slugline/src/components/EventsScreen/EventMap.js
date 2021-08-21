import React, { useEffect, useRef, useState } from "react";

import {
    Icon
} from "react-native-elements";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import MapStyle from "../../mapstyles/MapStyle";
import EventMarker from "./EventMarker";
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

const EventMap = React.forwardRef(({ events, onEventMarkerPress }, ref) => {
    let [selected, setSelected] = useState('');
    const onMarkerPress = (e) => {
        setSelected(e.nativeEvent.id);
        onEventMarkerPress(e.nativeEvent.id);
    };
    return (
        <MapView
            ref={ref}
            style={{
                flex: 1
            }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle.Get()}
            userLocationPriority="passive"
            // onPoiClick={onPoiClick}
            onMarkerPress={onMarkerPress}
            zoomTapEnabled={false}
            initialRegion={INITIAL_REGION}
            showsUserLocation={true}
            showsMyLocationButton={false}
            showsBuildings={true}
            showsPointsOfInterest={true}
            showsCompass={false}
        >
            {events?.map((event) => {
                if(event.isVirtual) return;
                return (
                    <EventMarker 
                        key={event.id}
                        event={event}
                        selected={selected == event.id}
                    />
                )
            })}
        </MapView>
    )
});

export default EventMap;
