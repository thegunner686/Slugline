import React, { useState, useEffect } from "react";

import {
    FlatList,
    View,
    Text
} from "react-native";

import {
    Overlay
} from "react-native-elements";

import IntentListComponent from "./IntentListComponent";

import styles from "../Styles/Components/IntentsDisplay";

import { useStore } from "../Stores/useStore";

function IntentsDisplayProvider(props) {
    let [overlayVisible, setOverlayVisible] = useState(false);

    let fetchIntents = useStore(state => state.fetchIntents);

    let [intents, setIntents] = useState([]);

    const renderIntent = ({ item }) => {
        return <IntentListComponent value={item}/>
    };

    return (
        <IntentsDisplay
            overlayVisible={overlayVisible}
            intents={intents}
            renderIntent={renderIntent}
        />
    )
}

function IntentsDisplay(props) {

    let { overlayVisible, intents, renderIntent } = props;

    return (
        <>
            <FlatList
                contentContainerStyle={styles.scrollView}
                data={intents}
                renderItem={renderIntent}
                keyExtractor={item => item.id}
            />
            <Overlay 
                visible={overlayVisible}
            >

            </Overlay>
        </>

    )
}

export default IntentsDisplayProvider;