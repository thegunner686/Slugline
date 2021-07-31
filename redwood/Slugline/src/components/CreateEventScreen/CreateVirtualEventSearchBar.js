import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Keyboard
} from "react-native";

import SearchBar from "./SearchBar";

import { useAuth } from "../../stores/useAuth";

export default function CreateVirtualEventSearchBar({
    onLeftIconPress, onRightIconPress, onResultPress,
    isVirtual
}) {
    
    let [searchValue, setSearchValue] = useState("");
    let [usingDefault, setUsingDefault] = useState(false);
    let [defaultEventLink] = useAuth(state => [state.user.profile.defaultEventLink])
    let [results, setResults] = useState([
        {
            description: "Use your default profile event link"
        }
    ]);

    const onChangeText = (text) => {
        setSearchValue(text);
    }

    const onSearchResultPress = (result) => {
        setUsingDefault(true);
        setSearchValue(defaultEventLink);
        onResultPress({
            name: defaultEventLink,
            url: defaultEventLink
        });
        Keyboard.dismiss();
    };

    const onFocus = () => {
        setUsingDefault(false);
    };

    const onEndEditing = () => {
        if(!usingDefault) {
            onResultPress({
                url: searchValue
            });
        }
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
