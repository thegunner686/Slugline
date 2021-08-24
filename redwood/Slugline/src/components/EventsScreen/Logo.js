import React from "react";

import {
    Image
} from "react-native-elements";

import { height, width, Colors } from "../../stylesheet"
 
export default function Logo() {
    return (
        <Image 
            source={require("../../../assets/slugline_logo.png")}
            style={{
                width: 200,
                height: 40,
                resizeMode: "cover",
                marginBottom: 10
            }}
            placeholderStyle={{
                backgroundColor: "transparent"
            }}
        />
    );
}