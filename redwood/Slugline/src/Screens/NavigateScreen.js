import React, { useState, useRef } from "react";

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"

// Components
import BookmarkedLocationsHorizontalList from "../components/NavigateScreen/BookmarkedLocationsHorizontalList";
import BookmarkedLocationsFooter from "../components/NavigateScreen/BookmarkedLocationsFooter";
import BookmarkedLocationsModal from "../components/NavigateScreen/BookmarkedLocationsModal";
import BookmarkedLocationEditModal from "../components/NavigateScreen/BookmarkedLocationEditModal";
import LocationLookupInput from "../components/NavigateScreen/LocationLookupInput";
import LocationMap from "../components/NavigateScreen/LocationMap";

import { width, height, Colors, Fonts, Shadow, sizes } from "../stylesheet"

import { useStore } from "../useStore";
import { random_id } from "../utils";

/*
    bookmark {
        id,
        name,
        description,
        coordinate: {
            latitude,
            longitude
        },
        color: {
            r,
            g,
            b,
            rgb
        }
    }
*/

// Testing Data
const UCSC_COORDS = {
    latitude: 36.99279, //08500746,
    longitude: -122.060962, //2303877,
}

function NavigateScreen(props) {
    // STATE STUFF
    let [region, setRegion] = useState({
        ...UCSC_COORDS,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
    });
    let [selectedBookmark, setSelectedBookmark] = useState(null);

    // STORE STUFF
    let bookmarks = useStore(state => state.bookmarks);
    let [createBookmark] = useStore(state => [state.createBookmark])

    // REFS
    const mapRef = useRef(null);
    const bookmarksModalRef = useRef(null);

    // HELPER FUNCTIONS
    const animateToAboveCoordinate = (coordinate) => {
        const view_region = {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
        };
        mapRef.current?.animateToRegion(view_region);
    };

    // HANDLERS
    const onLocationMapLongPress = (e) => {
        let { coordinate } = e.nativeEvent;
        // create a bookmark object
        let bookmark = {
            id: random_id(),
            name: "",
            description: "",
            coordinate,
            color: Colors.Red3
        };

        // add to zustand store
        createBookmark(bookmark);

        // animate to location
        animateToAboveCoordinate(bookmark.coordinate);

        // toggle edit modal
        setSelectedBookmark(bookmark);
    };

    const onBookmarkPress = (id) => {
        // scroll to the index in the locations flat list
        console.log("ok pressed", id)
    };

    const onLookupLocationPress = (data, details) => {
        // animate to the location on the map
        // create a temporary pin on the location
        // prompt the user if they want to add the location
        // console.log(details.geometry.location)
        let bookmark = {
            id: random_id(), //data.place_id,
            place_id: data.place_id,
            name: data.structured_formatting?.main_text,
            description: data.description,
            coordinate: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng
            },
            color: Colors.Green3
        };
        createBookmark(bookmark);
        animateToAboveCoordinate(bookmark.coordinate);
        setSelectedBookmark(bookmark);
    };

    const onBookmarkListItemPress = (bookmark) => {
        bookmarksModalRef.current?.close();
        
        animateToAboveCoordinate(bookmark.coordinate);
        setSelectedBookmark(bookmark);
    }

    return (
        <>
        <LocationMap
            initialRegion={region}
            onLongPress={onLocationMapLongPress}
            bookmarks={bookmarks}
            onBookmarkPress={onBookmarkPress}
            ref={mapRef}
        />
        <LocationLookupInput 
            location_coordinate={UCSC_COORDS}
            onPress={onLookupLocationPress}
        />
        <BookmarkedLocationsHorizontalList/>
        <BookmarkedLocationsFooter
            openModal={() => {
                bookmarksModalRef.current?.open();
            }}
            closeModal={() => {
                bookmarksModalRef.current?.close();
            }}
        />
        <BookmarkedLocationsModal 
            bookmarks={bookmarks}
            onBookmarkPress={onBookmarkListItemPress}
            ref={bookmarksModalRef}
        />
        <BookmarkedLocationEditModal
            selectedBookmark={selectedBookmark}
            onBackdropPress={() => {
                setSelectedBookmark(null)
            }}
        />
        </>
    )
}

export default NavigateScreen;