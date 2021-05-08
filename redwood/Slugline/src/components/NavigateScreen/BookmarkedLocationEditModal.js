import React, { useEffect, useState, useRef } from "react";

import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

import {
    Overlay,
    Input,
    Button,
    Icon
} from "react-native-elements"

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import { useStore } from "../../useStore";

import { Colors, Fonts, sizes, width, height, rgba} from "../../stylesheet";

const haptic_options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};

const color_choices = [
    Colors.Blue4,
    Colors.Red4,
    Colors.Yellow4,
    Colors.Green4,
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
                borderRadius: size / 4,
                borderColor: rgba(Colors.Grey1, 0.2),
                borderWidth: selected == color ? 5 : 0,
                backgroundColor: color == null ? Colors.Grey3.rgb : color.rgb
            }}>

            </View>
        </TouchableOpacity>
    )
}

function RandomColorChoice({ selected, setSelected }) {
    let [color, setColor] = useState(Colors.Random())
    let [previousColor, setPreviousColor] = useState(color);
    let [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if(selected == previousColor) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selected]);

    const size = 40;
    return (
        <TouchableOpacity
            onPress={() => {
                if(!isSelected) {
                    setSelected(previousColor);
                    setColor(Colors.Random())
                    return;
                }
                setSelected(color);
                setPreviousColor(color);
                setColor(Colors.Random())
            }}
        >
            <View style={{
                width: size,
                height: size,
                borderRadius: size / 4,
                borderColor: rgba(Colors.Grey1, 0.2),
                borderWidth: selected == previousColor ? 5 : 0,
                backgroundColor: previousColor.rgb,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Icon 
                    name="color-lens"
                    type="material"
                    color={Colors.White.rgb}
                />
            </View>
        </TouchableOpacity>
    )
}

function DeleteButton({ onPress }) {
    return (
        <TouchableOpacity 
            style={{
                position: "absolute",
                right: -10,
                top: -10,
                width: 35,
                height: 35,
                backgroundColor: Colors.Black.rgb,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10
            }}
            onPressIn={() => {
                ReactNativeHapticFeedback.trigger("impactLight", haptic_options);
            }}
            onLongPress={() => {
                ReactNativeHapticFeedback.trigger("impactHeavy", haptic_options);
                onPress();
            }}
        >
            <Icon
                name="delete-forever"
                type="material"
                size={sizes.Icon4}
                color={Colors.White.rgb}
            />
        </TouchableOpacity>
    )
}

function SaveButton({ onPress }) {
    return (
        <TouchableOpacity 
            style={{
                position: "absolute",
                right: -10,
                bottom: -10,
                width: 35,
                height: 35,
                backgroundColor: Colors.Blue3.rgb,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10
            }}
            onPress={() => {
                ReactNativeHapticFeedback.trigger("impactLight", haptic_options);
                onPress();
            }}
        >
            <Icon
                name="done"
                type="material"
                size={sizes.Icon4}
                color={Colors.White.rgb}
            />
        </TouchableOpacity>
    )
}

function BookmarkedLocationEditModal({ selectedBookmark, onBackdropPress }) {
    // state
    let [updateBookmark, deleteBookmark] = useStore(state => [state.updateBookmark, state.deleteBookmark]);
    let [name, setName] = useState(selectedBookmark?.name);
    let [description, setDescription] = useState(selectedBookmark?.description);
    let [initialColor, setInitialColor] = useState(selectedBookmark?.color);

    // refs
    let nameInputRef = useRef(null);

    useEffect(() => {
        setInitialColor(selectedBookmark?.color);
    }, [selectedBookmark?.id]);

    useEffect(() => {
        setName(selectedBookmark?.name);
        setDescription(selectedBookmark?.description)
    }, [selectedBookmark])

    const setColor = (color) => {
        updateBookmark(selectedBookmark?.id, { color });
    };

    const onSavePress = () => {
        if(name.trim() == "") {
            nameInputRef.current?.shake();
            return;
        }

        updateBookmark(selectedBookmark?.id, {
            name,
            description
        });

        onBackdropPress();
    };

    const onDeletePress = () => {
        deleteBookmark(selectedBookmark?.id);
        onBackdropPress();
    };

    const onCancel = () => {
        if(selectedBookmark?.name.trim() == "" && name.trim() == "") {
            deleteBookmark(selectedBookmark?.id);
        }
        onBackdropPress();
    }

    return (
        <Overlay 
            animationType="fade"
            isVisible={selectedBookmark != null}
            onBackdropPress={onCancel}
            overlayStyle={{
                width: width / 4 * 3.5,
                height: height / 10 * 3,
                backgroundColor: Colors.White.rgb,
                position: "absolute",
                top: height / 10,
                borderRadius: 10,
                borderColor: selectedBookmark?.color?.rgb,
                borderBottomWidth: 5,
            }}
            backdropStyle={{
                backgroundColor: Colors.White.rgb,
                opacity: 0.4
            }}
        >   
            <DeleteButton onPress={onDeletePress}/>
            <Input
                containerStyle={{ paddingLeft: 0 }}
                label="Name (Required)"
                labelStyle={Fonts.Label5}
                placeholder="Bookmark name"
                inputStyle={Fonts.Paragraph3}
                onChangeText={(value) => {
                    if(value.length > 60) return;
                    setName(value);
                }}
                value={name}
                autoFocus
                ref={nameInputRef}
                clearButtonMode="while-editing"
            />
            <Input
                containerStyle={{ paddingLeft: 0 }}
                label="Description (Optional)"
                labelStyle={Fonts.Label5}
                placeholder="Bookmark description (optional)"
                onChangeText={(value) => {
                    if(value.length > 90) return;
                    setDescription(value);
                }}
                value={description}
                inputStyle={Fonts.Paragraph3}
                clearButtonMode="while-editing"
            />
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
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
                {
                    color_choices.includes(initialColor) ? null : 
                    <ColorChoice color={initialColor} selected={selectedBookmark?.color} setSelected={setColor} />
                }
                <RandomColorChoice selected={selectedBookmark?.color} setSelected={setColor} />
            </View>
            <Text style={{
                ...Fonts.Label2
            }}>To move a pin, tap on it, then hold down and drag to a new location.</Text>
            <SaveButton onPress={onSavePress} />
        </Overlay>
    )
}

export default BookmarkedLocationEditModal;