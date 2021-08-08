import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking
} from "react-native";

import {
    Input
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
                placeholder="Virtual Link"
                onChangeText={onChangeText}
                clearButtonMode="while-editing"
                dataDetectorTypes="link"
                autoCapitalize="none"
                autoCorrect={false}
            />
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
    },
    input: {
        ...Fonts.Graph4,
        textAlign: "center",
        backgroundColor: Colors.Grey6.rgb,
    }
});
