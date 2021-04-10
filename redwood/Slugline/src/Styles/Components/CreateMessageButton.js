import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    messageButton: {
        width: width / 4 * 3,
        backgroundColor: Colors.darkGreen.hex,
        borderRadius: width,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    messageButtonContainer: {
        position: "relative",
        bottom: height / 25,
        borderRadius: width,
    },
    messageButtonTitle: {
        color: "white",
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.small,
    }
});

export default styles;