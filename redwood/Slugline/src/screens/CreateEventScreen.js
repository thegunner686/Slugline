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

import { CreateEventMap, CreateEventSearchBar, CreateVirtualEventTile } from "../components/CreateEvent";
import { Colors, width, height, Shadow } from "../stylesheet";

import BackButton from "../components/BackButton";
import StretchList from "../components/StretchList";

export default function CreateEventScreen({ navigation }) {
    let [type, setType] = useState(EventEnums.Type.PHYSICAL);

    const toggleType = () => {
        if(type == EventEnums.Type.PHYSICAL) {
            setType(EventEnums.Type.VIRTUAL);
        } else {
            setType(EventEnums.Type.PHYSICAL);
        }
    }

    return (
        <>
            {/* <BackButton orientation="down" onPress={navigation.goBack}/> */}
            <StretchList
                header={
                    <>
                        <CreateEventSearchBar 
                            onLeftIconPress={navigation.goBack}
                            onRightIconPress={toggleType}
                            virtual={type == EventEnums.Type.VIRTUAL}
                        />
                        {type == EventEnums.Type.PHYSICAL ? 
                            <CreateEventMap/>
                            :
                            <CreateVirtualEventTile/>
                        }
                    </>
                }
            />
        </>
    )
}

const styles = StyleSheet.create({

});
