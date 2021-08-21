import React from "react";

import {
    View, 
    StyleSheet,
    Text
} from 'react-native';

import {
    Icon,
    Input
} from "react-native-elements";
import { Fonts } from "../../stylesheet";


export default function ContactTile({ contactInfo, onContactTileChange }) {
    const onEmailChange = (text) => {
        onContactTileChange({
            email: text
        });
    };

    const onPhoneChange = (text) => {
        onContactTileChange({
            phone: text
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.labelContainer}>
                    <Text style={Fonts.Paragraph3}>Contact Information</Text>
                </View>
                <View style={styles.contentContainer}>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon 
                        name="email"
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Input 
                        placeholder="Add email"
                        maxLength={140}
                        containerStyle={{ 
                            paddingLeft: 0, 
                            paddingRight: 0,
                            height: 40, 
                            width: "100%",
                        }}
                        inputStyle={{
                            ...Fonts.Paragraph4,
                            // backgroundColor: name.length > 0 ? Colors.White.rgb : Colors.Grey6.rgb,
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                        }}
                        value={contactInfo?.email}
                        onChangeText={onEmailChange}
                        keyboardType="email-address"
                        clearButtonMode="while-editing"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon 
                        name="phone"
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Input 
                        placeholder="Add phone number (Optional)"
                        maxLength={140}
                        containerStyle={{ 
                            paddingLeft: 0, 
                            paddingRight: 0,
                            height: 40, 
                            width: "100%",
                        }}
                        inputStyle={{
                            ...Fonts.Paragraph4,
                            // backgroundColor: name.length > 0 ? Colors.White.rgb : Colors.Grey6.rgb,
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                        }}
                        value={contactInfo?.phone}
                        onChangeText={onPhoneChange}
                        keyboardType="phone-pad"
                        dataDetectorTypes="phoneNumber"
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 20,
    },
    row: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    iconContainer: {
        flex: 1,
        padding: 10
    },
    labelContainer: {
        flex: 9,
        padding: 10
    },
    contentContainer: {
        flex: 9,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    }
})
