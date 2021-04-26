import React, { useState } from "react";

import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Text,
} from "react-native";

import {
    Image,
    Icon,
    Button
} from "react-native-elements";

import {launchImageLibrary} from 'react-native-image-picker';

import ProfileInput from "../../Components/ProfileInput";

import styles from "../../Styles/Screens/Authenticated/ProfileScreen";

import { useStore } from "../../Stores/useStore"
import { Colors } from "../../Styles/stylesheet";

function ProfileScreen(props) {
    let [editing, setEditing] = useState(false);
    let [loading, setLoading] = useState(false);

    let profile = useStore(state => state.profile);
    let updateProfile = useStore(state => state.updateProfile);
    let uploadProfilePicture = useStore(state => state.uploadProfilePicture);

    let [pronouns, setPronouns] = useState(profile.pronouns || "");
    let [college, setCollege] = useState(profile.college || "");
    let [grad_year, setGrad_Year] = useState(profile.grad_year || "");
    let [displayName, setDisplayName] = useState(profile.displayName || "");
    let [photoURL, setPhotoURL] = useState(profile.photoURL || "");

    function profileStateChanged() {
        return !(
            pronouns == profile.pronouns &&
            college == profile.college &&
            grad_year == profile.grad_year &&
            displayName == profile.displayName &&
            photoURL == profile.photoURL
        );
    }

    async function uploadProfile() {
        if(!editing) {
            setEditing(true);
            return;
        }

        if(!profileStateChanged()) {
            setEditing(false);
            return;
        }

        setLoading(true);
        let success = await updateProfile({
            pronouns,
            college,
            grad_year,
            displayName,
            photoURL
        });
        if(success) {
            setLoading(false);
            setEditing(false);
        } else {
            setLoading(false);
        }
    }

    function uploadPicture() {
        setLoading(true);
        launchImageLibrary({
            mediaType: "photo",
            maxWidth: 200,
            maxHeight: 200,
            quality: 1,
        }, async (res) => {
            if(res.didCancel) {
                setLoading(false);
                return;
            }

            if(res.errorCode && res.errorMessage) {
                console.log(res.errorCode);
                console.log(res.errorMessage);
                setLoading(false);
                return;
            }

            let url = await uploadProfilePicture(res.fileName, res.uri);

            setPhotoURL(url);
            setLoading(false);
        });
    }

    return (
        <SafeAreaView style={styles.container}>
                { photoURL == null || photoURL == "" ?
                    <Icon 
                        name="person"
                        type="material"
                        size={50}
                    />
                    :
                    <Image 
                        source={{ uri: photoURL }}
                        style={styles.profilePicture}
                    />
                }
                {
                    editing && 
                    <Button 
                        type="clear"
                        containerStyle={styles.uploadPictureButtonContainer}
                        titleStyle={styles.uploadPictureButtonTitle}
                        buttonStyle={styles.uploadPictureButton}
                        title="Upload Picture"
                        onPress={uploadPicture}
                        disabled={loading}
                        loading={loading}
                    />
                }
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={styles.contentContainer}
                >
                {
                    editing ? 
                    <ProfileInput
                        placeholder="Your name"
                        value={displayName}
                        label="Display Name"
                        onChangeText={(val) => { setDisplayName(val)}}
                        autoFocus
                    />
                    :
                    <Text style={styles.displayName}>{displayName} {pronouns && pronouns != "" ? `(${pronouns})` : ""}</Text>
                }
                { !editing && <Text style={styles.college}>{college} {grad_year}</Text>}
                {/* { !editing && <Text style={styles.email}>{profile.email}</Text>} */}
                {
                    editing &&
                    <ProfileInput
                        placeholder="Your pronouns"
                        value={pronouns}
                        label="Pronouns"
                        onChangeText={(val) => { setPronouns(val)}}
                    />
                }
                {
                    editing &&
                    <ProfileInput
                        placeholder="Your college"
                        value={college}
                        label="College Affiliation"
                        onChangeText={(val) => { setCollege(val)}}
                    />
                }
                {
                    editing &&
                    <ProfileInput
                        placeholder="Class year"
                        value={grad_year}
                        label="Expected Graduation Year"
                        onChangeText={(val) => { setGrad_Year(val)}}
                    />
                }
                
                <Button 
                    title={editing ? "Save Profile" : "Edit Profile"}
                    buttonStyle={[styles.editButton, {
                        backgroundColor: editing ? Colors.red.hex : Colors.darkBlue.hex
                    }]}
                    titleStyle={styles.editTitle}
                    containerStyle={styles.editButtonContainer}
                    raised={true}
                    onPress={uploadProfile}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ProfileScreen;