import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import {
    Input,
    Image
} from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, height, Fonts } from "../stylesheet";
import { ResourceTile } from "../components/Resources";

export default function AskASlugScreen({ props, onBlurbed }) {
    let [text, setText] = useState("asdfghjk");

    const onBlurb = (val) => {
        setText(val);
    };
    
    return (
        <ScrollView 
            style={styles.scrollview}
            contentContainerStyle={styles.container}>
            
            <Image
                source={require("../../assets/ask_a_slug_logo.png")}
                style={styles.logo}
            />
            
            {/* <Text style={styles.titleContainer}>Ask a Slug!</Text> */}
            <Text style={styles.descriptionContainer}>
                Ask a Slug is a peer-support (student-led) network designed to connect you with campus resources that will best address your issue. No matter what you need or whatever question you have, include your information below and we will follow up within 72 hours.
            </Text>

            <ResourceTile 
                title={"Make an Ask A Slug Appointment"} 
                description={"Meet with a peer to answer your questions"} 
                link={"https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUN2YUdrcFNsWU96fGRlZmF1bHR8NzljNTA4YmQyODRlZjAyNGY3Njc0NzE2OWZlMjc5NGY"} 
                key={"Make an Ask A Slug Appointment"}
            />

            <Input 
                style={styles.input}
                placeholder="Your email"
                value={text}
                onChangeText={onBlurb}
            />

            <Text>{ text }</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.Grey6.rgb,
        height: 40,
        padding: 10,
    },
    container: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
    },
    scrollview: {
        flex: 1,
        backgroundColor: Colors.Grey6.rgb,
    },
    // titleContainer: {
    //     padding: 5,
    //     fontFamily: Fonts.Title4.fontFamily,
    //     fontSize: Fonts.Title4.fontSize,
    // },
    descriptionContainer: {
        fontSize: Fonts.Graph3.fontSize,
        fontFamily: Fonts.Paragraph4.fontFamily,
        padding: 10,
    },
    logo: {
        width: 400,
        height: 100,
    },
})
