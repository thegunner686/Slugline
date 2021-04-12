import React, { useRef, useState } from "react";

import {
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import {
    MessageHeader,
    TitleInput,
    BodyInput,
    ClearButtonContainer,
    ContinueButton
} from "../../Components/MessageScreenComponents";

import BufferView from "../../Components/BufferView";

import styles from "../../Styles/Screens/Authenticated/MessageScreen";

function MessageScreen(props) {
    let [disabled, setDisabled] = useState(false);
    // category can be either enum {"SolveIntent", "ReportIntent"}
    let [category, setCategory] = useState("SolveIntent");
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");

    const titleInputRef = useRef(null);
    const bodyInputRef = useRef(null);

    const goToBodyInput = () => {
        bodyInputRef.current.focus();
    };

    const inputIsValid = () => {
        let valid = true;
        if(title.trim() == "") {
            titleInputRef.current.shake();
            valid = false;
        }
        if(body.trim() == "") {
            bodyInputRef.current.shake();
            valid = false;
        }
        return valid;
    };

    const validateAndContinue = () => {
        if(!inputIsValid()) return;

        props.navigation.navigate("MessageSubmit", {
            category,
            title,
            body
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <MessageHeader
                category={category}
                onCheckboxPress={() => { setCategory(category == "SolveIntent" ? "ReportIntent" : "SolveIntent")}}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.inputsContainer}
            >
                <TitleInput
                    category={category}
                    value={title}
                    disabled={disabled}
                    ref={titleInputRef}
                    onEndEditing={goToBodyInput}
                    onChangeText={setTitle}
                />
                <BodyInput
                    category={category}
                    value={body}
                    disabled={disabled}
                    ref={bodyInputRef}
                    onChangeText={setBody}
                />
                <ClearButtonContainer
                    showButton={body && body.trim() != ""}
                    onPress={() => setBody("")}
                />
                
                <ContinueButton
                    disabled={disabled}
                    onPress={validateAndContinue}
                />
                <BufferView/>
            </KeyboardAvoidingView>
            <BufferView/>
        </SafeAreaView>
    );
}

export default MessageScreen;