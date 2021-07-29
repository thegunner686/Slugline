import React from "react";

import {
    Text,
    View,
    Animated
} from "react-native";

import { Modalize } from "react-native-modalize";

import { height } from "../../stylesheet"

export default function CreateEventModal() {
    const onPositionChange = () => {
        console.log("position change")
    }
    const onScroll = () => {
        console.log("scroll")
    }
    return (
        <Modalize
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
            snapPoint={height / 10 * 2}
            withHandle={true}
            alwaysOpen={height / 10 * 4}
            onPositionChange={onPositionChange}
            bounces={false}
            withOverlay={false}
        >
            <Text>modal</Text>
        </Modalize>
    )
}