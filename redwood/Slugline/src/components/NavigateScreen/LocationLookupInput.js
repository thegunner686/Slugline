import React from "react";

import {
    View
} from "react-native";

import {
    Icon,
    Input
} from "react-native-elements";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { width, height, Colors, Fonts } from "../../stylesheet";

function LocationLookupInput({ bookmarks, onPress, location_coordinate }) {
    let { latitude, longitude } = location_coordinate;
    return (
        <View style={{ 
            position: "absolute", 
            zIndex: 1, 
            width: width / 4 * 3.5, 
            alignSelf: "center",
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
                placeholder="Search for new locations"
                fetchDetails={true}
                onPress={onPress}
                query={{
                    key: 'AIzaSyDoRXqOwKd5kZCtGonJGfYyTkcyweQ-MGE',
                    language: 'en',
                    location: latitude + "," + longitude,
                    radius: '25000',
                    // components: 'country:us'
                }}
                textInputProps={{
                    clearButtonMode: "while-editing",
                    clearTextOnFocus: true
                }}
        />
        </View>
    )
}

export default LocationLookupInput;