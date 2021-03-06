import React from "react";
import { TouchableOpacity } from "react-native";

import { 
    Icon 
} from "react-native-elements";
import { Colors, sizes, height, rgba } from "../stylesheet";

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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                left: 10,
                padding: 2,
                top: height / 20,
                zIndex: 1000,
                backgroundColor: rgba(Colors.Black)(0.8),
                borderRadius: 50
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
                color={color ? color : Colors.White.rgb}
                size={sizes.Icon4}
            />
        </TouchableOpacity>
    )
}