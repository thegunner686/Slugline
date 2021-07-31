import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Keyboard
} from "react-native";

import SearchBar from "./SearchBar";

import { useGooglePlaces } from "../../stores/useGooglePlaces";

export default function CreatePhysicalEventSearchBar({
    onLeftIconPress, onRightIconPress, onResultPress,
    isVirtual
}) {
    
    let [searchValue, setSearchValue] = useState("");
    let [results, setResults] = useState([]);
    let [placesSession, setPlacesSession] = useState(null);
    let [openGooglePlacesAutocompleteSession] = useGooglePlaces(state => [state.openAutocompleteSession]);
    let [placesResponse] = useGooglePlaces(state => [state.autocompleteResponse]);

    useEffect(() => {
        setResults(placesResponse == null ? [] : placesResponse.predictions);
    }, [placesResponse]);

    const onChangeText = async (text) => {
        setSearchValue(text);
        if(text == null || text.trim() == "") return;
        placesSession.feed(text);
    };

    const onFocus = () => {
        setPlacesSession(openGooglePlacesAutocompleteSession());
    };

    const onEndEditing = () => {
        setPlacesSession(null);
    };

    const onSearchResultPress = async (place) => {
        let { result } = await placesSession.getDetails(place.place_id);
        onResultPress({
            location: {
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng
            },
            name: result.name,
            address: result.formatted_address,
            url: result.url
        });
        Keyboard.dismiss();
        setSearchValue(result.name)
    };

    return (
        <SearchBar 
            onLeftIconPress={onLeftIconPress}
            onRightIconPress={onRightIconPress}
            onSearchResultPress={onSearchResultPress}
            onFocus={onFocus}
            onEndEditing={onEndEditing}
            onChangeText={onChangeText}
            searchValue={searchValue}
            isVirtual={isVirtual}
            results={results}
        />
    )
}

const styles = StyleSheet.create({

})
