import React, { 
    useState,
    useEffect
} from "react";

import {
    StackActions
} from "@react-navigation/native";

import {
    View,
    Dimensions,
    Text
} from "react-native";

import {
    Image,
    Badge,
    Icon
} from "react-native-elements";

import { useAuth } from "../Stores/useAuth";

import { Colors, Fonts } from "../Styles/stylesheet";
import styles from "../Styles/Components/RightHeaderBar";

const iconColor = Colors.darkBlue.hex;

function RightHeaderBar(props) {

    let photoURL = useAuth(state => state.photoURL);

    let [bug, showBug] = useState(false);
    let [help, showHelp] = useState(false);
    let [history, showHistory] = useState(!props.hideHistory || true);
    let [profile, showProfile] = useState(!props.hideProfile || true);

    return (
        <View style={styles.rightHeaderBarContainer}>
            {
                bug && 
                <Icon
                    name="bug-outline"
                    type="material-community"
                    onPress={() => { navigation.dispatch(StackActions.push("ReportBug")) }}
                    colors={iconColor}
                    containerStyle={{
                        marginRight: 20
                    }}
                    size={35}
                />
            }

            {
                help &&
                <Icon
                    name="help"
                    type="entypo"
                    onPress={() => { navigation.dispatch(StackActions.push("Help")) }}
                    color={iconColor}
                    containerStyle={{
                        marginRight: 25,
                    }}
                />
            }

            {
                history &&
                <View>
                    <Icon
                        name="archive"
                        type="entypo"
                        onPress={() => { navigation.dispatch(StackActions.push("History")) }}
                        color={iconColor}
                        containerStyle={{
                            marginRight: 25
                        }}
                        size={30}
                    />
                    {
                        props.numChangedUserIntents > 0 ?
                        <Badge
                            status="success"
                            textStyle={styles.badgeText}
                            containerStyle={styles.badgeContainer}
                        />
                        :
                        null
                    }
                </View>
            }

            {
                profile &&
                <Image
                    source={{ uri: photoURL }}
                    style={styles.profileImage}
                    onPress={() => { navigation.dispatch(StackActions.push("Profile")) }}
                />
            }
        </View>
    )
}

export default RightHeaderBar;