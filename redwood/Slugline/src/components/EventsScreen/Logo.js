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
                shadowColor: Colors.White.rgb,
                shadowOpacity: 1,
                shadowRadius: 10,
                shadowOffset: {
                    width: 0,
                    height: 0
                }
            }}
            containerStyle={{
                position: "absolute",
                top: height / 20,
                zIndex: 1,
                alignSelf: "center",
            }}
            placeholderStyle={{
                backgroundColor: "transparent"
            }}
        />
    );
}