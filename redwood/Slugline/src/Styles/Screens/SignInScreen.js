import {
    StyleSheet,
    Dimensions
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
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
    }
});

export default styles;