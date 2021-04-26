import {
    StyleSheet,
    Dimensions
} from "react-native";

import { Colors, Fonts, Sizes } from "../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    signInButtonContainer: {
        borderRadius: width,
    },
    signInButton: {
        width: width / 4 * 3,
        backgroundColor: Colors.darkBlue.hex,
        borderRadius: width,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    signInButtonTitle: {
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
    }
});

export default styles;