import React, { useEffect, useState } from "react";

import {
    Icon
} from "react-native-elements";

import { Marker } from "react-native-maps";
import { Colors, sizes } from "../../stylesheet";

export default function EventMarker({ coordinate, onDragStart, onDrag, onDragEnd }) {

    return (
        <Marker 
            coordinate={coordinate}
            draggable={true}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            tracksViewChanges={false}
        />
    );
}
