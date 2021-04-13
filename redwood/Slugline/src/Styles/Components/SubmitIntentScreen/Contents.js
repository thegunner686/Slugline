import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");

let containerWidth = width / 20 * 19;
let containerBuffer = 20;
const styles = StyleSheet.create({
    container: {
        flex: 6,
        width: containerWidth,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        backgroundColor: Colors.light.rgba(1),
        borderRadius: 30,
        shadowColor: Colors.dark.hex,
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    categoryContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 3,
        width: containerWidth - containerBuffer,
    },
    categoryIcon: {
        
    },
    categoryName: {
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.medium,
        color: Colors.dark.hex
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flex: 12,
        width: containerWidth - containerBuffer,
    },
    title: {
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.medium,
        color: Colors.dark.hex
    },
    body: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: Colors.dark.hex
    },
    bottomContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 6,
        width: containerWidth - containerBuffer
    },
    profileContainer: {
        flex: 2,
    },
    sendContainer: {
        flex: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        width: containerWidth - containerBuffer
    },
    displayName: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: Colors.dark.hex
    },

    buttonContainer: {
        borderRadius: width,
        width: width / 4 * 3
    },
    button: {
        backgroundColor: Colors.darkYellow.hex,
        borderRadius: width,
        width: width / 4 * 3
    },
    buttonTitle: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: "white",
    },
});

export default styles;