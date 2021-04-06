import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.cream.hex,
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    mapContainer: {
        backgroundColor: Colors.cream.hex,
        height: height / 10 * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    msgBtn: {
        backgroundColor: Colors.darkGreen.hex,
        borderRadius: 10,
    },
    msgBtnContainer: {
        position: "relative",
        bottom: height / 25
    },
    msgBtnTitle: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.medium
    }
})
export default styles;