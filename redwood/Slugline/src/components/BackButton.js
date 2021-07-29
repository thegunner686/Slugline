import React from "react";
import { TouchableOpacity } from "react-native";

import { 
    Icon 
} from "react-native-elements";
import { Colors, sizes, height } from "../stylesheet";

export default function BackButton({ orientation, color, onPress }) {
    let name;
    let slop = 20;

    switch(orientation) {
        case "up":
            name = "chevron-up";
            break;
        case "down":
            name = "chevron-down";
            break;
        case "left":
            name = "chevron-left";
            break;
        case "right":
            name = "chevron-right";
            break;
        default:
            name = "chevron-left";
    }
    return (
        <TouchableOpacity 
            style={{
                position: "absolute",
                left: 10,
                top: height / 20,
                zIndex: 1000
            }}
            onPress={onPress}
            hitSlop={{
                top: slop,
                bottom: slop,
                left: slop,
                right: slop
            }}
        >
            <Icon
                name={name}
                type="material-community"
                color={color ? color : Colors.Black.rgb}
                size={sizes.Icon3}
            />
        </TouchableOpacity>
    )
}