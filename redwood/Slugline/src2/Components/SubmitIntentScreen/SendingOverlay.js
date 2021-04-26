import React from "react";

import {
    View,
    Text
} from "react-native"

import {
    Overlay,
    Icon,
    Button
} from "react-native-elements";

import styles from "../../Styles/Components/SubmitIntentScreen/SendingOverlay";

import { Colors } from "../../Styles/stylesheet";

function SendOverlay(props) {
    let { overlayVisible, sending, error, closeOverlay } = props;
    return (
        <Overlay 
            animationType="slide"
            backdropStyle={[
                styles.backdrop,
                {
                    backgroundColor: error ? Colors.red.hex : sending ? Colors.yellow.hex : Colors.green.hex, 
                }
            ]}
            overlayStyle={styles.overlay}
            isVisible={overlayVisible} 
            onBackdropPress={closeOverlay}
        >
            <>
            <View style={styles.topContainer}>
                <Icon
                    name="send"
                    type="font-awesome"
                    color={sending ? Colors.yellow.hex : error ? Colors.darkRed.hex : Colors.green.hex}
                    size={40}
                    style={styles.icon}
                />
                <Text
                    style={styles.text}
                >
                    {sending ?
                        "Delivering Your Message"
                        :
                        error ?
                        "Sorry! Your message failed to send."
                        :
                        "Message Delivered!"
                    }   
                </Text>
            </View>
            <View
                style={styles.bottomContainer}
            >
                <Button 
                    buttonStyle={[
                        styles.button,
                        {
                            backgroundColor: error ? Colors.red.hex : Colors.darkGreen.hex

                        }
                    ]}
                    containerStyle={styles.buttonContainer}
                    disabledStyle={styles.disabledButton}
                    disabled={sending}
                    title={error ? "Exit" : "All done!"}
                    loading={sending}
                    onPress={closeOverlay}
                />
            </View>
            </>
        </Overlay>
    )
}

export default SendOverlay;