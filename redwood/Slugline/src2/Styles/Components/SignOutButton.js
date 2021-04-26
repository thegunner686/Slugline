import {
    StyleSheet,
    Dimensions
} from "react-native";

import { Colors, Fonts, Sizes } from "../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    signOutButtonContainer: {
        borderRadius: width,
    },
    signOutButton: {
        width: width / 4 * 3,
        backgroundColor: Colors.darkYellow.hex,
        borderRadius: width,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    signOutButtonTitle: {
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