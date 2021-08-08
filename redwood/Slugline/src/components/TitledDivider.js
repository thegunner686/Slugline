import React from "react";

import {
    Text,
    View,
    StyleSheet
} from "react-native";

import {
    Divider
} from "react-native-elements";

import { Colors, Fonts } from "../stylesheet";

export default function TitledDivider({ style, children,  }) {
    return (
        <View style={[{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexShrink: 1,
            marginVertical: 10,
        }, style]}>
            <View style={{
                flexGrow: 1
            }}>
                <Divider 
                    width={0}  
                    orientation="horizontal"
                    color={Colors.Grey5.rgb}
                />
            </View>
            <View style={{
                flexShrink: 1,
                height: "100%",
                display: "flex",
                flexDirection: "row"
            }}>
                {children}
            </View>
            <View style={{
                flexGrow: 1,
            }}>
            <Divider 
                width={0}  
                orientation="horizontal"
                color={Colors.Grey6.rgb}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

