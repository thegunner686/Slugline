import React from "react";

import {
    View
} from "react-native";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { width, height, Colors, Fonts } from "../../stylesheet";

import { GOOGLE_PLACES_AUTOCOMPLETE_KEY } from "@env";

function LocationLookupInput({ bookmarks, onPress, location_coordinate }) {
    let { latitude, longitude } = location_coordinate;
    return (
        <View style={{ 
            position: "absolute", 
            zIndex: 1, 
            alignSelf: "center",
            width: width / 4 * 3.5,
            top: height / 10,
            shadowColor: Colors.Black.rgb,
            shadowOpacity: 0.2,
            shadowRadius: 4,
            shadowOffset: {
                x: 2,
                y: 2
            },
        }}>
        <GooglePlacesAutocomplete
                placeholder="Search for locations around campus!"
                fetchDetails={true}
                onPress={onPress}
                query={{
                    key: GOOGLE_PLACES_AUTOCOMPLETE_KEY,
                    language: 'en',
                    location: latitude + "," + longitude,
                    radius: '25000',
                    // components: 'country:us'
                }}
                textInputProps={{
                    clearButtonMode: "while-editing",
                    clearTextOnFocus: true,
                }}
                styles={{
                    textInput: {
                        textAlign: "left",
                        width: width / 4 * 3.5,
                        height: 40,
                        borderRadius: 10,
                        backgroundColor: Colors.White.rgb,
                        ...Fonts.Paragraph3,
                        color: Colors.Black.rgb,
                        overflow: "scroll"
                    },
                    row: {
                        borderRadius: 5,
                        marginBottom: 4,
                        borderRightWidth: 4,
                        borderRightColor: Colors.Blue4.rgb,
                    },
                    description: {
                        ...Fonts.Paragraph3
                    },
                    poweredContainer: {
                        display: "none"
                    }
                }}
        />
        </View>
    )
}

export default LocationLookupInput;