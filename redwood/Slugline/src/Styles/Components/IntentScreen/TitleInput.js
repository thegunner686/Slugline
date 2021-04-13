import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        borderBottomWidth: 0,
        padding: 5,
        height: 40,
    },
    label: {
        color: Colors.dark.hex,
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        paddingBottom: 5,
    },
    input: {
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.small,
        color: Colors.darkBlue.hex
    },
    leftIconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    disabled: {
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.small,
        color: Colors.darkBlue.hex
    }
});

export default styles;