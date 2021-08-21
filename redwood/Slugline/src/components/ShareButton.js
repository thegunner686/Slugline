import React from "react";
import { TouchableOpacity } from "react-native";

import { 
    Icon 
} from "react-native-elements";
import { Colors, sizes, height, rgba } from "../stylesheet";

export default function ShareButton({ color, onPress }) {
    let slop = 20;

    return (
        <TouchableOpacity 
            style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: 10,
                padding: 8,
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
                name="ios-share"
                color={color ? color : Colors.White.rgb}
                size={sizes.Icon5}
            />
        </TouchableOpacity>
    )
}