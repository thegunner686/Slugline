import React from "react";

import {
    View,
    Text
} from "react-native";

import {
    ListItem,
    Icon
} from "react-native-elements";

function IntentListComponent(props) {
    let { title, body, category, createdAt } = props.value;

    return (
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>
                    {title}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default IntentListComponent;