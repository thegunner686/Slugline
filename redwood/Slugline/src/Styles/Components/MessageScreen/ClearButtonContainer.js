import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        width,
    },
    button: {
        backgroundColor: "transparent",
        width: width / 4.5,
    },
    buttonTitle: {
        color: Colors.dark.hex,
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small
    }
});

export default styles;