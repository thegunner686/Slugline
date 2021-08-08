import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {
    Image,
    Icon,
    LinearProgress
} from "react-native-elements";

import { Colors, Fonts, rgba, Shadow, width } from "../../stylesheet";

import { launchImageLibrary } from 'react-native-image-picker';

import { useEvents } from "../../stores/useEvents";
import { useAuth } from "../../stores/useAuth";

export default function PhotoTile({ photo, onPhotoTileChange }) {
    let [isUploading, setIsUploading] = useState(false);
    let [uploadEventPhoto] = useEvents(state => [state.uploadEventPhoto]);
    let [profile] = useAuth(state => [state.user.profile]);

    const onImagePress = () => {
        if(isUploading) return;
        launchImageLibrary({
            mediaType: "photo",
            quality: 1,
            selectionLimit: 1,
        }, async (res) => {
            if(!res.didCancel && !res.errorCode) {
                let {fileName, uri } = res;
                setIsUploading(true);
                try {
                    let url = await uploadEventPhoto(profile.uid, fileName, uri);
                    onPhotoTileChange(url);
                } catch(e) {
                    console.log(e);
                }
            }
        });
    };

    useEffect(() => {
        if(isUploading) {
            setIsUploading(false);
        }
    }, [photo]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                disabled={isUploading}
                onPress={onImagePress}
            >
                <Image
                    source={photo != null ? { uri: photo } : null}
                    style={styles.image}
                    PlaceholderContent={
                        <View style={{
                            ...Shadow.bottom,
                            shadowColor: Colors.White.rgb
                        }}>
                            <Icon
                                name="file-upload"
                            />   
                            <Text style={Fonts.Paragraph4}>Upload Photo</Text> 
                        </View>
                    }
                    placeholderStyle={{
                        backgroundColor: Colors.Grey6.rgb
                    }}
                />
            </TouchableOpacity>
            { isUploading ?
                <LinearProgress 
                    variant="indeterminate"
                    color={Colors.Red3.rgb}
                    trackColor={Colors.Red6.rg}
                    style={{
                        height: 5,
                        width,
                        margin: 0,
                    }}
                />
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 20,
    },
    image: {
        width,
        height: width
    }
})
