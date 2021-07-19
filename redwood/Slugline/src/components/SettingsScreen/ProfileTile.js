import React from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {
    Image,
    Divider,
    Button,
    Icon
} from "react-native-elements";

import { useStore } from "../../useStore";

import { Colors, Fonts, sizes, width } from "../../stylesheet";

export default function ProfileTile({ onPress }) {
    let [profile] = useStore(state => [state.profile])
    
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topleft}>
                    <Image
                        source={{ uri: profile.picture }}
                        style={styles.profilePicture}
                    />
                </View>
                <View style={styles.topright}>
                    <View>
                        <Text style={Fonts.Graph2}>{profile.name}</Text>
                    </View>
                    <View>
                        <Text style={Fonts.Paragraph4}>({profile.pronouns})</Text>
                    </View>
                    <Divider style={{marginTop: 10, marginBottom: 10}}/>
                    <View>
                        <Text style={{
                            ...Fonts.Graph3,
                            color: Colors.Grey2.rgb
                        }}>{profile.college} '{profile.year}</Text>
                    </View>
                    <View>
                        <Text style={Fonts.Paragraph5}>{profile.major}</Text>
                    </View>
                </View>
                <View style={styles.rightEdit}>
                    <Text style={{
                        ...Fonts.Paragraph4,
                        color: Colors.Blue5.rgb
                    }}>Edit Profile</Text>
                    <Icon
                        type="material"
                        name="chevron-right"
                        size={sizes.Icon5}
                        color={Colors.Blue5.rgb}
                    />
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        backgroundColor: Colors.White.rgb,
        // ...Shadow.standard,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 1,
        padding: 10,
        paddingBottom: 0
    },
    top: {
        flexGrow: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    bottom: {
        flexShrink: 1,
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: Colors.Grey5.rgb,
        marginTop: 10,
    },
    topleft: {
        flexShrink: 1,
        height: "100%",
    },
    topright: {
        flexShrink: 1,
        padding: 5,
        display: "flex"
    },
    profilePicture: {
        width: 128,
        height: 128,
        borderRadius: 15,
        margin: 5
    },
    rightEdit: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
})
