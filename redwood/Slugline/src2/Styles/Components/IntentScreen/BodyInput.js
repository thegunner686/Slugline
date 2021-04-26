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
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    label: {
        color: Colors.dark.hex,
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        paddingBottom: 5,
    },
    input: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: Colors.darkBlue.hex,
        paddingTop: 0,
    },
    leftIconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    disabled: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: Colors.darkBlue.hex
    }
});

export default styles;