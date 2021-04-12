import React from "react";

import {
    View,
    Text
} from "react-native";

import {
    Icon,
    Button
} from "react-native-elements";

import styles from "../../Styles/Components/MessageSubmitScreen/MessageContentsContainer";

import { useStore } from "../../Stores/useStore";
import { Colors } from "../../Styles/stylesheet";

function MessageContentsContainer(props) {
    let { displayName, email, pronouns } = useStore(state => state.profile);

    let { category, anonymous, title, body, disabled, toggleOverlay } = props;

    return (
        <View style={[styles.container, {
            backgroundColor: anonymous ? Colors.dark.hex : Colors.light.hex
        }]}>
            <View style={styles.categoryContainer}>
                <Icon
                    name={category == "SolveIntent" ? "account-search" : "report"}
                    type={category == "SolveIntent" ? "material-community" : "material"}
                    size={30}
                    style={styles.categoryIcon}
                    color={category == "SolveIntent" ? Colors.yellow.hex : Colors.red.hex}
                />
                <Text style={[styles.title, {
                    color: anonymous ? Colors.light.hex : Colors.dark.hex
                }]}>
                    {title}
                </Text>
            </View>
            <View style={styles.contentContainer}>
                
                <Text style={[styles.body, {
                    color: anonymous ? Colors.light.hex : Colors.dark.hex
                }]}>
                    {body}
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.profileContainer}>
                    <Text style={[styles.displayName, {
                        color: anonymous ? Colors.light.hex : Colors.dark.hex
                    }]}>From,</Text>
                    <Text style={[styles.displayName, {
                        color: anonymous ? Colors.light.hex : Colors.dark.hex
                    }]}>
                        {
                            anonymous ?
                            `Anonymous Slug (${pronouns})` :
                            `${displayName} (${pronouns})`
                        }
                    </Text>
                </View>
                <View style={styles.sendContainer}>
                    <Button 
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonTitle}
                        title="Send it"
                        onPress={toggleOverlay}
                        disabled={disabled}
                        icon={
                            <Icon
                                name="send"
                                type="font-awesome"
                                color="white"
                                style={{ marginRight: 10 }}
                            />
                        }
                    />
                </View>
            </View>
        </View>
    )
}

export default MessageContentsContainer;