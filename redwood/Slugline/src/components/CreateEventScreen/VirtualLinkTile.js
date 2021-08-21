import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking
} from "react-native";

import {
    Input,
    Icon
} from "react-native-elements";
import { Fonts, Colors } from "../../stylesheet";

export default function VirtualLinkTile({ onChange }) {
    let [virtualLink, setVirtualLink] = useState("");

    const onChangeText = (text) => {
        setVirtualLink(text);
        onChange(text);
    };

    const onPreviewLinkPress = () => {
        Linking.canOpenURL(virtualLink).then(() => {
            Linking.openURL(virtualLink);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon
                    name="add-link"
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
                    inputContainerStyle={{
                        borderBottomWidth: 0,
                    }}
                    inputStyle={styles.input}
                    value={virtualLink}
                    placeholder="Add link"
                    onChangeText={onChangeText}
                    clearButtonMode="while-editing"
                    dataDetectorTypes="link"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {
                    virtualLink.trim() != "" &&
                    <>
                    <Text style={{
                            ...Fonts.Paragraph2
                    }}>{virtualLink}</Text>
                    <TouchableOpacity
                        onPress={onPreviewLinkPress}
                    >
                        <Text style={{
                            color: Colors.Blue3.rgb
                        }}>Preview Link</Text>
                    </TouchableOpacity>
                    </>
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
    input: {
        ...Fonts.Graph4,
        textAlign: "left",
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
});
