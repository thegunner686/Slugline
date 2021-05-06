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
import { getLocation } from "../components/NavigateScreen/LocationServices";

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
    let [createBookmark, saveBookmarks] = useStore(state => 
        [state.createBookmark, state.saveBookmarks]);


    // REFS
    const mapRef = useRef(null);
    const bookmarksModalRef = useRef(null);
    const bookmarksFlatListRef = useRef(null);

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

    const scrollToBookmark = (bookmark) => {
        bookmarksFlatListRef.current?.scrollToItem({
            animated: true,
            item: bookmark
        });
    }

    // HANDLERS
    const onLocationMapLongPress = (e) => {
        let { coordinate } = e.nativeEvent;
        // create a bookmark object
        let bookmark = {
            id: random_id(),
            name: "",
            description: "",
            coordinate,
            color: Colors.Red4
        };

        // add to zustand store
        createBookmark(bookmark);

        // animate to location
        animateToAboveCoordinate(bookmark.coordinate);

        // toggle edit modal
        setSelectedBookmark(bookmark);
    };

    const onBookmarkPress = (bookmark) => {
        // scroll to the item in the locations flat list
        animateToAboveCoordinate(bookmark.coordinate)
        scrollToBookmark(bookmark);
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
            color: Colors.Green4
        };
        createBookmark(bookmark);
        animateToAboveCoordinate(bookmark.coordinate);
        setSelectedBookmark(bookmark);
    };

    const onBookmarkListItemPress = (bookmark) => {
        bookmarksModalRef.current?.close();
        
        animateToAboveCoordinate(bookmark.coordinate);
        scrollToBookmark(bookmark);
    };

    const onLocationEditEnd = () => {
        setSelectedBookmark(null);
        saveBookmarks();
    };

    const onEditPress = (bookmark) => {
        setSelectedBookmark(bookmark);
    };

    const onScrollToBookmarkedLocation = (bookmark) => {
        animateToAboveCoordinate(bookmark.coordinate);
    };

    const onAddBookmarkPress = () => {
        bookmarksModalRef.current?.close();
        const _add = (coordinate) => {
            let bookmark = {
                id: random_id(),
                name: "",
                description: "",
                coordinate: coordinate == null ? UCSC_COORDS : coordinate,
                color: Colors.Red4
            };
    
            // add to zustand store
            createBookmark(bookmark);
    
            // animate to location
            animateToAboveCoordinate(bookmark.coordinate);
    
            // toggle edit modal
            setSelectedBookmark(bookmark);
        }
        getLocation((location) => {
            _add({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        }, (error) => {
            _add();
            console.log(error);
        });
    };

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
            bookmarks={bookmarks}
            location_coordinate={UCSC_COORDS}
            onPress={onLookupLocationPress}
        />
        <View style={{
            position: "absolute",
            bottom: 0,
        }}>
            <BookmarkedLocationsHorizontalList
                onEditPress={onEditPress}
                onScrollToItem={onScrollToBookmarkedLocation}
                ref={bookmarksFlatListRef}
                bookmarks={bookmarks}
            />
            <BookmarkedLocationsFooter
                openModal={() => {
                    bookmarksModalRef.current?.open();
                }}
                closeModal={() => {
                    bookmarksModalRef.current?.close();
                }}
                onAddBookmarkPress={onAddBookmarkPress}
            />
        </View>
        <BookmarkedLocationsModal 
            bookmarks={bookmarks}
            onBookmarkPress={onBookmarkListItemPress}
            onAddBookmarkPress={onAddBookmarkPress}
            ref={bookmarksModalRef}
        />
        <BookmarkedLocationEditModal
            selectedBookmark={selectedBookmark}
            onBackdropPress={onLocationEditEnd}
        />
        </>
    )
}

export default NavigateScreen;