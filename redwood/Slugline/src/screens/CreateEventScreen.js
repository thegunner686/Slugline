import React, { useState, useEffect } from "react";

import {
    StyleSheet
} from "react-native";

import { 
    Map,
    SearchBar,
    LocationTile,
    PhotoTile,
    DateTimeTile,
    NameDescriptionTile,
    ContactTile,
    PreviewEventButton,
    DetailsTile
} from "../components/CreateEvent";

import {
    Input,
    Icon,
    Chip,
    Divider
} from "react-native-elements";

import StretchList from "../components/StretchList";
import TitledDivider from "../components/TitledDivider";
import { Fonts, Colors } from "../stylesheet";
import VirtualLinkTile from "../components/CreateEventScreen/VirtualLinkTile";

import { useEvents } from "../stores/useEvents";
import { useAuth } from "../stores/useAuth";

import { getSimpleFormattedDate } from "../utils";

export default function CreateEventScreen({ navigation }) {
    let [user] = useAuth(state => [state.user]);
    let [setEventPreview] = useEvents(state => [state.setEventPreview]);
    let [isVirtual, setIsVirtual] = useState(false);
    let [link, setLink] = useState(null);
    let [location, setLocation] = useState(null);
    let [photo, setPhoto] = useState(null);
    let [datetime, setDatetime] = useState({
        startTime: new Date(),
        endTime: new Date()
    });
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [contactInfo, setContactInfo] = useState({
        email: user.email,
        phone: "",
    });
    let [details, setDetails] = useState({});

    const buildEvent = () => {
        let date = getSimpleFormattedDate(datetime.startTime);
        return {
            isVirtual,
            isArchived: false,
            isHidden: false,
            link: isVirtual ? link : null,
            location: !isVirtual ? location : null,
            photoURL: photo,
            date,
            ...datetime,
            contact: {
                ...contactInfo,
            },
            ...details,
            name,
            description,
            organizer: {
                name: user.profile.name,
                uid: user.uid,
                picture: user.profile?.picture,
                email: user.email
            }
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
        setDatetime({
            ...datetime,
            ...dt
        });
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

    const onContactTileChange = (ct) => {
        setContactInfo({
            ...contactInfo,
            ...ct,
        });
    };

    const onDetailsTileChange = (dt) => {
        setDetails({
            ...details,
            ...dt
        });
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
                            <VirtualLinkTile
                                onChange={onVirtualLinkTileChange}
                            />
                        </>
                        :
                        <>
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
                    <Divider style={{ marginVertical: 10 }} />
                    
                    <NameDescriptionTile
                        name={name}
                        description={description}
                        onNameDescriptionTileChange={onNameDescriptionTileChange}
                    />
                    <Divider style={{ marginVertical: 10 }} />
                    <DateTimeTile
                        datetime={datetime}
                        onDateTimeTileChange={onDateTimeTileChange}
                    />
                    <Divider style={{ marginVertical: 10 }} />
                    <DetailsTile
                        details={details}
                        onDetailsTileChange={onDetailsTileChange}
                    />
                    <Divider style={{ marginBottom: 10, }} />
                    <ContactTile
                        contactInfo={contactInfo}
                        onContactTileChange={onContactTileChange}
                    />
                    <Divider style={{ marginVertical: 10 }} />
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
