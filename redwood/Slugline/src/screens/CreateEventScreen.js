import React, { useState, useEffect } from "react";

import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import {
    Image
} from "react-native-elements";

import { EventEnums } from "../utils";

import { 
    CreateEventMap, 
    CreatePhysicalEventSearchBar, 
    CreateVirtualEventSearchBar,
    CreateVirtualEventTile, 
    CreateEventSearchResultTile 
} from "../components/CreateEvent";

import StretchList from "../components/StretchList";

export default function CreateEventScreen({ navigation }) {
    let [type, setType] = useState(EventEnums.Type.PHYSICAL);
    let [searchResult, setSearchResult] = useState(null);

    const toggleType = () => {
        if(type == EventEnums.Type.PHYSICAL) {
            setType(EventEnums.Type.VIRTUAL);
        } else {
            setType(EventEnums.Type.PHYSICAL);
        }
    };

    const onSearchResultPress = (result) => {
        setSearchResult(result);
    };

    const onMarkerMove = (location) => {
        setSearchResult({
            location
        });
    };

    return (
        <>
            {/* <BackButton orientation="down" onPress={navigation.goBack}/> */}
            <StretchList
                header={
                    <>
                        {type == EventEnums.Type.PHYSICAL ?
                            <>
                            <CreatePhysicalEventSearchBar 
                                onLeftIconPress={navigation.goBack}
                                onRightIconPress={toggleType}
                                isVirtual={type == EventEnums.Type.VIRTUAL}
                                onResultPress={onSearchResultPress}
                            />
                            <CreateEventMap
                                onMarkerMove={onMarkerMove}
                                result={type == EventEnums.Type.VIRTUAL ? null : searchResult}
                            />
                            </>
                            :
                            <>
                            <CreateVirtualEventSearchBar 
                                onLeftIconPress={navigation.goBack}
                                onRightIconPress={toggleType}
                                isVirtual={type == EventEnums.Type.VIRTUAL}
                                onResultPress={onSearchResultPress}
                            />
                            <CreateVirtualEventTile/>
                            </>
                        }
                    </>
                }
                body={
                    <>
                        {searchResult != null ?
                            <CreateEventSearchResultTile 
                                result={searchResult}
                                isVirtual={type == EventEnums.Type.VIRTUAL}
                            />
                            :
                            null
                        }
                    </>
                }
            />
        </>
    )
}

const styles = StyleSheet.create({

});
