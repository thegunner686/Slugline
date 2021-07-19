import React from "react";

import { 
    View, 
    Text,
    ScrollView,
    StyleSheet
} from "react-native";

import {
    ListItem,
    Button
} from "react-native-elements"

import { 
    SignOutButton, 
    ProfileTile 
} from "../components/Settings"

import { Colors, Fonts } from "../stylesheet";
import { TouchableOpacity } from "react-native";

function TouchableListItem({ title, subtitle, onPress }) {
    return (
        <TouchableOpacity 
            onPress={onPress}
        >
            <ListItem 
                bottomDivider
            >
                <ListItem.Content>
                    <ListItem.Title>
                        {title}
                    </ListItem.Title>
                    {subtitle && 
                        <ListItem.Subtitle>
                            {subtitle}
                        </ListItem.Subtitle>
                    }
                </ListItem.Content>
                <ListItem.Chevron></ListItem.Chevron>
            </ListItem>
        </TouchableOpacity>
    )
}

export default function SettingsScreen({ navigation }) {

    const navigateToTermsOfUse = () => {
        navigation.navigate("TermsOfUse");
    };

    const navigateToEditProfile = () => {
        navigation.navigate("EditProfile");
    };

    return (
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.container}>
            <ProfileTile 
                onPress={navigateToEditProfile}
            />
            <View style={styles.listContainer}>
                <TouchableListItem title="Terms of Use" onPress={navigateToTermsOfUse}/>
                <TouchableListItem title="Privacy & Data" />
                <TouchableListItem title="Contact Slugline" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
    },
    scrollview: {
        backgroundColor: Colors.Grey6.rgb
    },
    listContainer: {
        marginTop: 10,
        width: "100%"
    }
});
