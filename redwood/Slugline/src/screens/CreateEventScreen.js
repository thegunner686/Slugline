import React, { useState, useEffect } from "react";

import {
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";

import { 
    Map,
    SearchBar,
    LocationTile,
    PhotoTile,
    DateTimeTile,
    NameDescriptionTile,
    PreviewEventButton
} from "../components/CreateEvent";

import {
    Input,
    Icon,
    Chip
} from "react-native-elements";

import StretchList from "../components/StretchList";
import TitledDivider from "../components/TitledDivider";
import { Fonts, Colors } from "../stylesheet";
import VirtualLinkTile from "../components/CreateEventScreen/VirtualLinkTile";

import { useEvents } from "../stores/useEvents";

import { getSimpleFormattedDate } from "../utils";

export default function CreatePhysicalEventScreen({ navigation }) {
    let [setEventPreview] = useEvents(state => [state.setEventPreview]);
    let [isVirtual, setIsVirtual] = useState(false);
    let [link, setLink] = useState(null);
    let [location, setLocation] = useState(null);
    let [photo, setPhoto] = useState(null);
    let [datetime, setDatetime] = useState(new Date());
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");

    const buildEvent = () => {
        let date = getSimpleFormattedDate(datetime);
        return {
            isVirtual,
            isArchived: false,
            isHidden: false,
            link: isVirtual ? link : null,
            location: !isVirtual ? location : null,
            photoURL: photo,
            date,
            datetime,
            name,
        };
    };

    const onSearchResultPress = (result) => {
        setLocation({
            name: result.name,
            coordinates: result.coordinates,
            address: result.address,
            custom: result.custom
        });
    };

    const onMarkerMove = (coords) => {
        setLocation({
            ...location,
            coordinates: coords,
            address: "",
            custom: true
        });
    };

    const onLocationTileChange = (loc) => {
        setLocation(loc);
    };

    const onPhotoTileChange = (url) => {
        setPhoto(url);
    };

    const onDateTimeTileChange = (dt) => {
        setDatetime(dt);
    };

    const onNameDescriptionTileChange = (nd) => {
        setName(nd.name);
        setDescription(nd.description);
    };
    
    const onPreviewButtonPress = () => {
        let event = buildEvent();
        setEventPreview(event);
        navigation.navigate("PreviewEvent");
    };

    const onVirtualLocationButtonPress = () => {
        setIsVirtual(!isVirtual);
    };

    const onVirtualLinkTileChange = (l) => {
        setLink(l);
    };

    return (
        <>
            <StretchList
                header={
                    <>
                    <SearchBar 
                        onLeftIconPress={navigation.goBack}
                        onResultPress={onSearchResultPress}
                    />
                    <Map
                        onMarkerMove={onMarkerMove}
                        location={location}
                    />
                    </>
                }
                body={
                    <>
                    { isVirtual ? 
                        <>
                            <TitledDivider>
                                <Icon
                                    name="add-link"
                                />
                            </TitledDivider>
                            <VirtualLinkTile
                                onChange={onVirtualLinkTileChange}
                            />
                        </>
                        :
                        <>
                            <TitledDivider>
                                <Icon 
                                    name="navigation"
                                    type="feather"
                                />
                            </TitledDivider>
                            <LocationTile
                                location={location}
                                onLocationTileChange={onLocationTileChange}
                            />
                        </>
                    }
                    <Chip 
                        onPress={onVirtualLocationButtonPress}
                        icon={
                            <Icon 
                                name="online-prediction"
                                color={isVirtual ? Colors.White.rgb : Colors.Blue5.rgb}
                            />
                        }
                        type={isVirtual ? "solid" : "outline"}
                        title="Virtual Event"
                    />
                    <TitledDivider>
                        <Icon
                            name="clock-outline"
                            type="material-community"
                        />
                    </TitledDivider>
                    <DateTimeTile
                        datetime={datetime}
                        onDateTimeTileChange={onDateTimeTileChange}
                    />
                    <TitledDivider>
                        <Icon
                            name="title"
                        />
                    </TitledDivider>
                    <NameDescriptionTile
                        onNameDescriptionTileChange={onNameDescriptionTileChange}
                    />
                    <TitledDivider>
                        <Icon
                            name="photo"
                        />
                    </TitledDivider>
                    <PhotoTile
                        photo={photo}
                        onPhotoTileChange={onPhotoTileChange}
                    />
                    <PreviewEventButton 
                        onPress={onPreviewButtonPress}
                    />
                    </>
                }
            />
        </>
    )
}

const styles = StyleSheet.create({

});
