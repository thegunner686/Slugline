import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    leftHeaderBarContainer: {
        width: width / 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 5
    },
    leftHeaderBarLogo: {
        width: 35,
        height: 35,
        borderRadius: 35,
        marginLeft: 10
    },
    leftHeaderBarLogoPlaceholder: {
        backgroundColor: Colors.cream.hex,
        borderRadius: width
    },
    leftHeaderBarTaglineContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    leftHeaderBarTaglineTitle: {
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.small,
        color: Colors.darkBlue.hex
    },
    leftHeaderBarTagline: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.tiny,
        color: Colors.darkBlue.hex
    }
});

export default styles;