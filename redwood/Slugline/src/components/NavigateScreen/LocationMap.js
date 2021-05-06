import React from "react";

import {
    Icon
} from "react-native-elements";

import MapView, { Marker } from "react-native-maps";

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import { useStore } from "../../useStore";

import { sizes } from "../../stylesheet";

const haptic_options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};

function BookmarkedLocationMarker({ bookmark, onPress }) {
    let { id, coordinate, color } = bookmark;
    let [updateBookmark, saveBookmarks] = useStore(state => [state.updateBookmark, state.saveBookmarks]);
    return (
        <Marker 
            draggable
            title={bookmark.name}
            coordinate={coordinate}
            onDragStart={() => {
                ReactNativeHapticFeedback.trigger("impactHeavy", haptic_options)
            }}
            onDragEnd={(e) => {
                ReactNativeHapticFeedback.trigger("impactHeavy", haptic_options)
                updateBookmark(bookmark.id, {
                    coordinate: e.nativeEvent.coordinate
                });
                saveBookmarks();
            }}
            key={id}
            onPress={() => {
                ReactNativeHapticFeedback.trigger("impactLight", haptic_options)
                onPress();
            }}
        >
            <Icon 
                name="location-pin"
                type="material"
                size={sizes.Icon3}
                color={color.rgb}
            />
        </Marker>
    )
}

const LocationMap = React.forwardRef(({ 
    initialRegion, onLongPress, bookmarks,
    onBookmarkPress
    }, ref) => {

    return (
        <MapView
            style={{
                flex: 1
            }} 
            initialRegion={initialRegion}
            onLongPress={onLongPress}
            ref={ref}
        >
            {bookmarks?.map((bookmark, index) => (
                <BookmarkedLocationMarker 
                    key={bookmark.id}
                    bookmark={bookmark}
                    onPress={() => onBookmarkPress(bookmark)}
                />
            ))}
        </MapView>
    )
});

export default LocationMap;
