import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {
    Input
} from "react-native-elements";
import { Fonts, Colors } from "../../stylesheet";

export default function NameDescriptionTile({ onNameDescriptionTileChange }) {
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");

    const onNameChange = (text) => {
        setName(text);
        onNameDescriptionTileChange({
            name: text,
            description
        });
    };

    const onDescriptionChange = (text) => {
        setDescription(text);
        onNameDescriptionTileChange({
            name,
            description: text
        });
    };

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Event Name"
                maxLength={140}
                containerStyle={{ 
                    paddingLeft: 0, 
                    paddingRight: 0,
                    height: 40, 
                    width: "100%",
                }}
                inputStyle={{
                    ...Fonts.SubHeader1,
                    backgroundColor: name.length > 0 ? Colors.White.rgb : Colors.Grey6.rgb,
                }}
                inputContainerStyle={{
                    borderBottomWidth: 0,
                }}
                value={name}
                multiline={true}
                onChangeText={onNameChange}
                clearButtonMode="while-editing"
            />
            <Input 
                placeholder="Description"
                maxLength={280}
                containerStyle={{ 
                    paddingLeft: 0, 
                    paddingRight: 0,
                    height: 40, 
                    width: "100%",
                }}
                inputStyle={{
                    ...Fonts.Graph4,
                    backgroundColor: description.length > 0 ? Colors.White.rgb : Colors.Grey6.rgb,
                }}
                inputContainerStyle={{
                    borderBottomWidth: 0,
                }}
                value={description}
                multiline={true}
                onChangeText={onDescriptionChange}
                clearButtonMode="while-editing"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 5,
        marginBottom: 20,
    }
})
