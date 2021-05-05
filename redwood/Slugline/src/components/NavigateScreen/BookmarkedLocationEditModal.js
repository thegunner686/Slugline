import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

import {
    Overlay,
    Input
} from "react-native-elements"

import { useStore } from "../../useStore";

import { Colors, Fonts, sizes, width, height, rgba} from "../../stylesheet";

const color_choices = [
    Colors.Blue4,
    Colors.Red4,
    Colors.Yellow4,
    Colors.Green4,
    Colors.Grey3
];

function ColorChoice({ color, selected, setSelected}) {
    const size = 40
    return (
        <TouchableOpacity
            onPress={() => setSelected(color)}
        >
            <View style={{
                width: size,
                height: size,
                borderRadius: size,
                borderColor: rgba(Colors.Grey1, 0.2),
                borderWidth: selected == color ? 5 : 0,
                backgroundColor: color.rgb
            }}>

            </View>
        </TouchableOpacity>
    )
}

function BookmarkedLocationEditModal({ selectedBookmark, onBackdropPress }) {
    let [updateBookmark] = useStore(state => [state.updateBookmark]);
    let [name, setName] = useState(selectedBookmark?.name);
    let [description, setDescription] = useState(selectedBookmark?.description);

    useEffect(() => {
        setName(selectedBookmark?.name);
        setDescription(selectedBookmark?.description)
    }, [selectedBookmark])

    const setColor = (color) => {
        updateBookmark(selectedBookmark?.id, { color });
    };

    const onEditEnd = () => {
        updateBookmark(selectedBookmark?.id, {
            name,
            description
        });
    };

    return (
        <Overlay 
            animationType="fade"
            isVisible={selectedBookmark != null}
            onBackdropPress={() => {
                onEditEnd();
                onBackdropPress();
            }}
            overlayStyle={{
                width: width / 4 * 3.5,
                height: height / 3,
                backgroundColor: Colors.White.rgb,
                position: "absolute",
                top: height / 10,
                borderRadius: 10,
                borderColor: selectedBookmark?.color?.rgb,
                borderBottomWidth: 5,
            }}
            backdropStyle={{
                backgroundColor: selectedBookmark?.color?.rgb,
                opacity: 0
            }}
        >
            <Input
                containerStyle={{ paddingLeft: 0 }}
                label="Name"
                labelStyle={Fonts.Label5}
                placeholder="Bookmark name"
                inputStyle={Fonts.Paragraph3}
                onChangeText={(value) => {
                    console.log(value)
                    setName(value);
                }}
                value={name}
                autoFocus
            />
            <Input
                containerStyle={{ paddingLeft: 0 }}
                label="Description"
                labelStyle={Fonts.Label5}
                placeholder="Bookmark description (optional)"
                onChangeText={setDescription}
                value={description}
                inputStyle={Fonts.Paragraph3}
            />
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
                margin: 5
            }}>
                {
                    color_choices.map((color) => (
                        <ColorChoice 
                            key={color.rgb}
                            color={color} 
                            selected={selectedBookmark?.color}
                            setSelected={setColor}
                        />
                    ))
                }
            </View>
            <Text style={Fonts.Label4}>To move a pin, hold down and drag to a new location.</Text>
        </Overlay>
    )
}

export default BookmarkedLocationEditModal;