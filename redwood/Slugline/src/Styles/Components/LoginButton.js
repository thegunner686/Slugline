import {
    StyleSheet,
    Dimensions
} from "react-native";

import { Colors, Fonts, Sizes } from "../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    signUpButtonContainer: {
        borderRadius: width,
    },
    signUpButton: {
        width: width / 4 * 3,
        backgroundColor: Colors.darkBlue.hex,
        borderRadius: width,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    signUpButtonTitle: {
        color: "white",
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
    },
    buttonIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    buttonIconPlaceholder: {
        backgroundColor: Colors.darkBlue.hex,
        borderRadius: width
    },
    logInButton: {
        width: width / 4 * 3,
    },
    logInButtonTitle: {
        color: Colors.darkBlue.hex,
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
    }
});

export default styles;