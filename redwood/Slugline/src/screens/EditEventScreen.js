import React, { useState } from "react";

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
    Icon,
    Chip,
    Divider,
    SpeedDial
} from "react-native-elements";

import StretchList from "../components/StretchList";
import { Colors } from "../stylesheet";
import VirtualLinkTile from "../components/CreateEventScreen/VirtualLinkTile";

import { useEvents } from "../stores/useEvents";

import { getSimpleFormattedDate } from "../utils";

export default function EditEventScreen({ navigation }) {
    let [event, setEvent] = useEvents(state => [state.event_edit, state.setEventEdit]);
    let [open, setOpen] = useState(false);

    const updateEvent = (updates) => {
        setEvent({
            ...event,
            ...updates
        });
    };

    const onSearchResultPress = (result) => {
        updateEvent({ 
            location: {
                name: result.name,
                coordinates: result.coordinates,
                address: result.address,
                custom: result.custom
            }
        });
    };

    const onMarkerMove = (coords) => {
        updateEvent({
            location: {
                ...event.location,
                coordinates: coords,
                address: "",
                custom: true
            }
        });
    };

    const onLocationTileChange = (loc) => {
        updateEvent({
            location: loc
        });
    };

    const onPhotoTileChange = (url) => {
        updateEvent({
            photoURL: url
        });
    };

    const onDateTimeTileChange = (dt) => {
        updateEvent({
            ...dt
        });
    };

    const onNameDescriptionTileChange = (nd) => {
        updateEvent({
            ...nd
        });
    };

    const onVirtualLocationButtonPress = () => {
        setIsVirtual(!isVirtual);
        updateEvent({
            isVirtual: !event.isVirtual
        });
    };

    const onVirtualLinkTileChange = (l) => {
        updateEvent({
            link: l
        });
    };

    const onContactTileChange = (ct) => {
        setContactInfo({
            contact: {
                ...event.contact,
                ...ct,
            }
        });
    };

    const onDetailsTileChange = (dt) => {
        updateEvent({
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
                        location={event.location}
                    />
                    </>
                }
                body={
                    <>
                    { event.isVirtual ? 
                        <>
                            <VirtualLinkTile
                                onChange={onVirtualLinkTileChange}
                            />
                        </>
                        :
                        <>
                            <LocationTile
                                location={event.location}
                                onLocationTileChange={onLocationTileChange}
                            />
                        </>
                    }
                    <Chip 
                        onPress={onVirtualLocationButtonPress}
                        icon={
                            <Icon 
                                name="online-prediction"
                                color={event.isVirtual ? Colors.White.rgb : Colors.Blue5.rgb}
                            />
                        }
                        type={event.isVirtual ? "solid" : "outline"}
                        title="Virtual Event"
                    />
                    <Divider style={{ marginVertical: 10 }} />
                    
                    <NameDescriptionTile
                        name={event.name}
                        description={event.description}
                        onNameDescriptionTileChange={onNameDescriptionTileChange}
                    />
                    <Divider style={{ marginVertical: 10 }} />
                    <DateTimeTile
                        datetime={{ startTime: event.startTime, endTime: event.endTime }}
                        onDateTimeTileChange={onDateTimeTileChange}
                    />
                    <Divider style={{ marginVertical: 10 }} />
                    <DetailsTile
                        details={{ 
                            room: event.room
                        }}
                        onDetailsTileChange={onDetailsTileChange}
                    />
                    <Divider style={{ marginBottom: 10, }} />
                    <ContactTile
                        contactInfo={event.contact}
                        onContactTileChange={onContactTileChange}
                    />
                    <Divider style={{ marginVertical: 10 }} />
                    <PhotoTile
                        photo={event.photoURL}
                        onPhotoTileChange={onPhotoTileChange}
                    />
                    </>
                }
            />
            <SpeedDial
                isOpen={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
                >
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Cancel"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Delete"
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>
        </>
    )
}

const styles = StyleSheet.create({

});
