import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableOpacity
} from "react-native";

import {
    Input,
    Icon
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
            <View style={styles.iconContainer}>
                <Icon 
                    name="navigation"
                    type="feather"
                />
            </View>
            <View style={styles.contentContainer}>
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
                        textAlign: "left",
                        // backgroundColor: Colors.Grey6.rgb,
                    }}
                    inputContainerStyle={{
                        borderBottomWidth: 0,
                    }}
                    disabledInputStyle={{
                        // backgroundColor: Colors.Grey6.rgb,
                    }}
                    disabled={!location?.custom}
                    placeholder={location?.custom ? "Give the location a name" : "Search for a location above"}
                    value={location?.name}
                    onChangeText={(text) => {
                        onLocationTileChange({
                            ...location,
                            name: text
                        });
                    }}
                    clearButtonMode={location?.custom ? "always" : "while-editing"}
                />
                {   location &&
                    <Text style={{
                        ...Fonts.Paragraph2
                    }}>{!location?.custom ? location.address : "Custom location"}</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 20,
    },
    iconContainer: {
        flex: 1,
        padding: 10
    },
    contentContainer: {
        flex: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    }
})
