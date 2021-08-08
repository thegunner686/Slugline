import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableOpacity
} from "react-native";

import {
    Input
} from "react-native-elements";
import { Colors, Fonts, Shadow } from "../../stylesheet";

import { createMapLink } from "react-native-open-maps";

export default function PhysicalLocationTile({ location, onLocationTileChange }) {
    const onDirectionsPress = () => {
        const link = createMapLink({
            latitude: location.latitude,
            longitude: location.longitude,
            navigate_mode: "navigate"
        });
        Linking.canOpenURL(link).then(() => {
            Linking.openURL(link);
        });
    };
    return (
        <View style={styles.container}>
            <Input 
                containerStyle={{ 
                    paddingLeft: 0, 
                    paddingRight: 0,
                    height: 40, 
                    width: "100%",
                }}
                labelStyle={{
                    ...Fonts.Paragraph4,
                    color: Colors.Grey4.rgb
                }}
                style={{
                    ...Fonts.Graph4,
                }}
                inputStyle={{
                    textAlign: "center",
                    backgroundColor: Colors.Grey6.rgb,
                }}
                inputContainerStyle={{
                    borderBottomWidth: 0,
                }}
                disabledInputStyle={{
                    backgroundColor: Colors.Grey6.rgb,
                }}
                disabled={!location?.custom}
                placeholder={location?.custom ? "Give the location a name" : "Search for a location or drag and drop the pin"}
                value={location?.name}
                onChangeText={(text) => {
                    onLocationTileChange({
                        ...location,
                        name: text
                    });
                }}
                clearButtonMode={location?.custom ? "always" : "while-editing"}
            />
            {
                !location?.custom ?
                <Text style={{
                    ...Fonts.Paragraph2
                }}>{location?.address}</Text>
                :
                <Text style={{
                    ...Fonts.Paragraph2
                }}>Custom Location</Text>
            }
            {  
                location != null &&
                <TouchableOpacity
                    onPress={onDirectionsPress}
                >
                    <Text style={{
                        color: Colors.Blue3.rgb
                    }}>Preview Directions</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 20,
    }
})
