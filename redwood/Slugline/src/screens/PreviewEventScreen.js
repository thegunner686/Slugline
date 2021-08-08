import React from "react";

import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from "react-native";

import {
    LinearProgress,
    Button
} from "react-native-elements";

import StretchList from "../components/StretchList";
import BackButton from "../components/BackButton";

import { useEvents } from "../stores/useEvents";
import { useAuth } from "../stores/useAuth";

import { Colors, Fonts, rgba, width } from "../stylesheet";

export default function PreviewEventScreen({ navigation }) {
    let [preview] = useEvents(state => [state.event_preview]);
    let [createEvent] = useEvents(state => [state.createEvent]);
    let [user] = useAuth(state => [state.user]);

    const publishEvent = async () => {
        try {
            await createEvent(user, preview);
        } catch(e) {
            console.log(e);
        }
        navigation.navigate("Events");
    };

    return (
        <>
        <BackButton 
            orientation="left"
            onPress={navigation.goBack}
            color={Colors.White.rgb}
        />
        <StretchList
            header={
                <>
                <ImageBackground
                    source={{ uri: preview.photoURL }}
                    style={styles.photo}
                >
                    <View style={{flexGrow: 2,}}></View>
                    <View style={styles.nameOverlay}>
                        <Text style={styles.name}>
                            {preview.name}
                        </Text>
                        <Text>
                            {`Hosted by ${user.profile.name}`}
                        </Text>
                    </View>
                    <View style={{flexGrow: 1,}}></View>
                </ImageBackground>
                </>
            }
            body ={
                <>
                    <Text>
                        {preview.description}
                    </Text>
                    <Button 
                        title="Publish Event"
                        onPress={publishEvent}
                    />
                </>
            }
        />
        </>
    )
}

const styles = StyleSheet.create({
    photo: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    nameOverlay: {
        width: "80%",
        height: "40%",
        flexShrink: 1,
        backgroundColor: rgba(Colors.White)(0.9),
        padding: 5
    },
    name: {
        ...Fonts.Header1
    }
});
