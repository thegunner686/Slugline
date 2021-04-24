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

import { useStore } from "../Stores/useStore";

import { Colors, Fonts } from "../Styles/stylesheet";
import styles from "../Styles/Components/RightHeaderBar";


const iconColor = Colors.darkBlue.hex;

function RightHeaderBar(props) {
    let [bug, showBug] = useState(false);
    let [help, showHelp] = useState(false);
    let [history, showHistory] = useState(!props.hideHistory);
    let [profile, showProfile] = useState(!props.hideProfile);
    let [logout, showLogout] = useState(!props.hideLogout);
    let profileData = useStore(state => state.profile);
    let signOut = useStore(state => state.signOut);

    return (
        <View style={styles.rightHeaderBarContainer}>
            {
                bug && 
                <Icon
                    name="bug-outline"
                    type="material-community"
                    onPress={() => { props.navigation.dispatch(StackActions.push("ReportBug")) }}
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
                    onPress={() => { props.navigation.dispatch(StackActions.push("Help")) }}
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
                        // name="archive"
                        // type="entypo"
                        // name="buffer"
                        // type="material-community"
                        name="location"
                        type="entypo"
                        onPress={() => { props.navigation.dispatch(StackActions.push("History")) }}
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
                    source={{ uri: profileData ? profileData.photoURL : null }}
                    style={styles.profileImage}
                    placeholderStyle={styles.profileImagePlaceholder}
                    onPress={() => { props.navigation.dispatch(StackActions.push("Profile")) }}
                />
            }

            {
                logout &&
                <Icon
                    name="logout"
                    type="material"
                    onPress={() => { signOut() }}
                    color={iconColor}
                    containerStyle={{
                        marginRight: 25
                    }}
                    size={30}
                />
            }
        </View>
    )
}

export default RightHeaderBar;