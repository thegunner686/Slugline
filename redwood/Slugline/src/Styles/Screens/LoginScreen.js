import {
    StyleSheet,
    Dimensions
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.cream.hex,
        width,
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    topContainer: {
        flex: 20,
        width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buffer: {
        flex: 1,
    },
    buttonsContainer: {
        flex: 3,
        width,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        
    },
    title: {
        fontFamily: Fonts.types.italic,
        fontSize: Fonts.sizes.large,
        color: Colors.darkBlue.hex
    },
    tagline: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: Colors.darkBlue.hex
    },
    logo: {
        width: width / 2,
        height: width / 2,
    },
    logoPlaceholder: {
        backgroundColor: Colors.cream.hex,
        borderRadius: width,
    },
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