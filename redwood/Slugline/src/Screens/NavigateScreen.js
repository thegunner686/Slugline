import React, { useState, useRef, useEffect } from "react";

import {
    View,
    Share,
    Alert
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

import { Buffer } from "buffer";
import { useStore } from "../useStore";
import { from_navigate_path_url, random_id, to_navigate_path_url } from "../utils";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

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
    let [deepLinkURL] = useStore(state => [state.deepLinkURL]);


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
        // animateToAboveCoordinate(bookmark.coordinate)
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
        
        // animateToAboveCoordinate(bookmark.coordinate);
        scrollToBookmark(bookmark);
    };

    const onLocationEditEnd = () => {
        setSelectedBookmark(null);
        saveBookmarks();
    };

    const onEditPress = (bookmark) => {
        animateToAboveCoordinate(bookmark.coordinate);
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

    const onSharePress = async (bookmark) => {
        let obj_string = JSON.stringify(bookmark),
            base64_string = Buffer.from(obj_string).toString("base64");

        const res = await Share.share({
            title: "Share Bookmarked Location",
            message: to_navigate_path_url(base64_string)
        });

    };
    
    const parse_deep_link = (url) => {
        let base64_string,
            obj_string,
            bookmark;

        try {
            base64_string = from_navigate_path_url(url);
            obj_string = Buffer.from(base64_string, "base64").toString();
            bookmark = JSON.parse(obj_string);
        } catch(e) {
            console.log(e);
            return null;
        }

        return bookmark;
    };

    const onReceiveNavigateURL = (url) => {
        if(url == undefined || url == null || url.trim().length == 0) return;

        let bookmark = parse_deep_link(url);

        if(bookmark == null) {
            Alert.alert("Aw shucks, that was a bad link.");
            return;
        }

        for(let i = 0; i < bookmarks.length; i++) {
            let mark = bookmarks[i];
            if(mark.id == bookmark.id || mark.coordinate == bookmark.coordinate) {
                animateToAboveCoordinate(mark.coordinate);
                scrollToBookmark(mark);
                return;
            }
        }

        // add to zustand store
        createBookmark(bookmark);
    
        // animate to location
        animateToAboveCoordinate(bookmark.coordinate);

        // allow edit
        setSelectedBookmark(bookmark);
    };

    // EFFECTS 
    useEffect(() => {
        onReceiveNavigateURL(deepLinkURL);
    }, [deepLinkURL]);

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
                onSharePress={onSharePress}
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