import React, { useState } from "react";
import create from "zustand";

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import {
    Input,
    Image,
    Button
} from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, rgba, Fonts, height, width } from "../stylesheet";
import { ResourceTile } from "../components/Resources";
import { ContactTile } from "../components/CreateEvent";

import { useAuth } from "../stores/useAuth";
import { useEmail } from "../stores/useEmail";

import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';

export default function AskASlugScreen(props) {
    let [user] = useAuth(state => [state.user]);
    let [personalEmail, setPersonalEmail] = useState("");
    let [schoolEmail, setSchoolEmail] = useState("");
    let [phoneNum, setPhoneNum] = useState("");
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [createEmail] = useEmail(state => [state.createEmail]);
{
    // let [contactInfo, setContactInfo] = useState({
    //     email: user.email,
    //     phone: "",
    // });
}

    const onPersonalEmailChange = (pe) => {
        setPersonalEmail(pe);
    };

    const onSchoolEmailChange = (se) => {
        setSchoolEmail(se);
    };

    const onPhoneNumChange = (pn) => {
        setPhoneNum(pn);
    };

    const onNameChange = (n) => {
        setName(n);
    };

    const onDescriptionChange = (d) => {
        setDescription(d);
    };
{
    // const onContactTileChange = (ct) => {
    //     setContactInfo({
    //         ...contactInfo,
    //         ...ct,
    //     });
    // };

    //const on
}
    const sendEmail = async () => {
        try {
            await createEmail(user, {
                personalEmail,
                schoolEmail,
                phoneNum,
                name,
                description
            });
        } catch(e) {
            console.log(e);
        }
        props.navigation.navigate("Resources");
    };

    
    return (
        <ScrollView 
            style={styles.scrollview}
            contentContainerStyle={styles.container}>
            
            <Image
                source={require("../../assets/ask_a_slug_logo.png")}
                style={styles.logo}
            />
            
            <Text style={styles.descriptionContainer}>
                Ask a Slug is a peer-support (student-led) network designed to connect you 
                with campus resources that will best address your issue. No matter what you 
                need or whatever question you have, include your information below and we 
                will follow up within 72 hours.
            </Text>

            <Text style={styles.warningContainer}>
                Please note: Do not rely on communication through this form for urgent 
                medical needs. If you think you may have a medical emergency, call 911 
                immediately or the local equivalent. For mental health emergencies, 
                contact Counseling And Psychological Services (CAPS).
            </Text>

            <Text></Text>

{
            // <ContactTile
            //     contactInfo={contactInfo}
            //     onContactTileChange={onContactTileChange}
            // />
}
            <Input 
                style={styles.input}
                placeholder="Your Personal email"
                value={personalEmail}
                onChangeText={onPersonalEmailChange}
            />
            <Input 
                style={styles.input}
                placeholder="Your School email"
                value={schoolEmail}
                onChangeText={onSchoolEmailChange}
            />
            <Input 
                style={styles.input}
                placeholder="Your Preferred Name"
                value={name}
                onChangeText={onNameChange}
            />
            <Input 
                style={styles.input}
                placeholder="Your Phone Number"
                value={phoneNum}
                onChangeText={onPhoneNumChange}
            />
            <Input 
                style={styles.input}
                placeholder="What can we help you with?"
                value={description}
                onChangeText={onDescriptionChange}
                multiline={true}
            />


            <Button 
                title="Send Email"
                titleStyle={{
                    ...Fonts.Paragraph3
                }}
                buttonStyle={{
                    backgroundColor: Colors.Blue3.rgb,
                    borderRadius: 5,
                    width: width / 10 * 9,
                    height: height / 20,
                    alignSelf: "center"
                }}
                onPress={sendEmail}
            />

            <Text></Text>

            <Text style={styles.descriptionContainer}>
                Or, make an appointment to meet with a peer-support leader!
            </Text>
            <ResourceTile 
                title={"Make an Ask A Slug Appointment"} 
                description={"Meet with a peer to answer your questions"} 
                link={"https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUN2YUdrcFNsWU96fGRlZmF1bHR8NzljNTA4YmQyODRlZjAyNGY3Njc0NzE2OWZlMjc5NGY"} 
                key={"Make an Ask A Slug Appointment"}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.Grey6.rgb,
        padding: 5,
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
        textAlign: "center",
    },
    warningContainer: {
        fontSize: Fonts.Paragraph4.fontSize,
        textAlign: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.Red3.rgb,
        color: Colors.Grey6.rgb,
    },
    logo: {
        width: 400,
        height: 100,
    },
})
