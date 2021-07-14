import React from "react";

import {
    Image
} from "react-native-elements";

import { width, height } from "../../stylesheet";

function ImageBackgroundCarousel() {
    
    return (
        <>
        <Image
            source={require("../../../assets/ucsc_photo5.jpeg")}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width,
                height,
            }}
        />
        </>
    )
}

export default ImageBackgroundCarousel;