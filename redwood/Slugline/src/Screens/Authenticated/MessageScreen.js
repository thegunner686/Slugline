import React, { useRef, useState } from "react";

import {
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import {
    Header,
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

    const bodyInputRef = useRef(null);

    const goToBodyInput = () => {
        // this is breaking FIX REF
        // bodyInputRef.current.focus();
    }

    function validateAndContinue() {
        console.log("continue");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
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
                    onEndEditing={goToBodyInput}
                    onChangeText={setTitle}
                />
                <BodyInput
                    category={category}
                    value={body}
                    disabled={disabled}
                    // ref={bodyInputRef} see FIX REF
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