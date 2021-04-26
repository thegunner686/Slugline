import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    backdrop: {
        opacity: 0.2,
        backgroundColor: Colors.yellow.hex
    },
    overlay: {
        backgroundColor: Colors.light.hex,
        width: width / 10 * 9,
        height: height / 10 * 7,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    topContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        margin: height / 15,
    },
    text: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.medium,
        marginBottom: 20,
    },
    bottomContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: width / 4 * 3,
        backgroundColor: Colors.green.hex
    },
    buttonContainer: {
        borderRadius: width,
    },
    disabledButton: {
        backgroundColor: Colors.dark.hex
    },

});

export default styles;