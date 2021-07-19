import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import remoteConfig from '@react-native-firebase/remote-config';

import { 
    View, 
    Text,
    StyleSheet,
    FlatList,
    ScrollView
} from "react-native";

import {
    Button
} from "react-native-elements";

import { ResourceTile, AskASlugButton } from "../components/Resources";

import { Colors, height } from "../stylesheet";

export default function ResourcesScreen(props) {

    let [resources, setResources] = useState([]);

    useEffect(() => {
        let resources_string = remoteConfig().getValue("resources").asString();
        setResources(JSON.parse(resources_string));
    }, []);

    const renderResourceTile = ({ item }) => {
        return <ResourceTile 
                    title={item.title} 
                    description={item.description} 
                    link={item.link} 
                    key={item.title}
                />
    };

    const navigateToAskASlug = () => {
        props.navigation.navigate("AskASlug");
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            style={styles.scrollview}>
            <AskASlugButton onPress={navigateToAskASlug}/>

            <View style={styles.resourcesContainer}>
                {resources.map((item) => renderResourceTile({item}))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center"
    },
    scrollview: {
        flex: 1,
        backgroundColor: Colors.Grey6.rgb
    },
    list: {
        flexGrow: 1
    }
})
