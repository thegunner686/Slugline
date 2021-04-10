import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    input: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: Colors.dark.hex,
    },
    inputLabel: {
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.tiny,
        color: Colors.dark.hex
    },
    container: {
        paddingLeft: 0,
        width: width / 4 * 3,
        height: 45,
        marginTop: 2,
        marginBottom: 2,
    },
    inputContainer: {
        borderBottomWidth: 0, 
        padding: 5,
        backgroundColor: "white",
        width: width / 4 * 3,
        borderRadius: 10,
        height: 30,
    }
});

export default styles;