import React, { useState } from "react";

import {
    SafeAreaView,
    View,
    Text
} from "react-native";

import styles from "../../Styles/Screens/Authenticated/MessageSubmitScreen";

import {
    Header,
    MessageContents,
    SendOverlay
} from "../../Components/MessageSubmitScreenComponents";

import { useStore } from "../../Stores/useStore";

function MessageSubmitScreen(props) {
    let [disabled, setDisabled] = useState(false);
    let [sending, setSending] = useState(false);
    let [error, setError] = useState(false);
    let [overlayVisible, setOverlayVisible] = useState(false);
    let [anonymous, setAnonymous] = useState(false);

    let sendMessage = useStore(state => state.sendMessage);

    let profile = useStore(state => state.profile)

    let { category, title, body } = props.route.params;

    const toggleOverlay = async () => {
        setSending(true);
        setOverlayVisible(true);
        try {
            await sendMessage();
            setSending(false);
        } catch(e) {
            console.log(e);
            setSending(false);
            setError(true);
        }
    };

    const closeOverlay = () => {
        if(sending) return;

        setOverlayVisible(false);

        if(!error) props.navigation.navigate("Home");
    };

    return (
        <SafeAreaView 
            style={styles.container}
        >
            <Header
                photoURL={profile.photoURL}
                disabled={disabled}
                anonymous={anonymous}
                onCheckboxPress={() => setAnonymous(!anonymous)}
            />
            <MessageContents
                category={category}
                anonymous={anonymous}
                title={title}
                body={body}
                disabled={disabled}
                toggleOverlay={toggleOverlay}
            />
            <SendOverlay
                sending={sending}
                error={error}
                overlayVisible={overlayVisible}
                closeOverlay={closeOverlay}
            />
        </SafeAreaView>
    );
}

export default MessageSubmitScreen;