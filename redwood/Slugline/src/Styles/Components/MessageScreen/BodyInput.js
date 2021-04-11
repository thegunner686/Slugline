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
        padding: 5
    },
    label: {
        color: Colors.dark,
        fontFamily: Fonts.standardFont,
        fontSize: Fonts.standardSize,
        paddingBottom: 5,
    },
    input: {
        fontFamily: Fonts.standardFont,
        fontSize: Fonts.standardSize,
        color: Colors.darkBlue
    },
    leftIconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    }
});

export default styles;