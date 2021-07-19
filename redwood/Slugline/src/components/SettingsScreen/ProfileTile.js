import React from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {
    Image,
    Divider,
    Button,
    Icon
} from "react-native-elements";

import { useStore } from "../../useStore";

import { Colors, Fonts, width } from "../../stylesheet";

export default function ProfileTile({ onPress }) {
    let [profile] = useStore(state => [state.profile])
    
    return (
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
                    <Divider style={{marginTop: 5, marginBottom: 5}}/>
                    <View>
                        <Text style={{
                            ...Fonts.Graph3,
                            color: Colors.Grey2.rgb
                        }}>{profile.college} '{profile.year}</Text>
                    </View>
                    <View>
                        <Text style={Fonts.Paragraph5}>{profile.major}</Text>
                    </View>
                    <Button 
                        buttonStyle={{
                            backgroundColor: Colors.Blue4.rgb,
                            padding: 5,
                            marginTop: 5
                        }}
                        titleStyle={{
                            ...Fonts.Paragraph4,
                            color: Colors.White.rgb
                        }}
                        type="clear"
                        title="Edit Profile"
                        icon={
                            <Icon
                                type="material"
                                name="chevron-right"
                                color={Colors.White.rgb}
                            />
                        }
                        onPress={onPress}
                        iconRight
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 10 * 9,
        borderRadius: 20,
        // backgroundColor: Colors.Yellow6.rgb,
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
    }
})
