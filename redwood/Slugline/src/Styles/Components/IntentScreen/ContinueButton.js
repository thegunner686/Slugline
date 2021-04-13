import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        marginBottom: height / 10
    },
    button: {
        width: width / 4 * 3,
        borderRadius: width,
        backgroundColor: Colors.dark.hex,
    },
    title: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,

    }
});

export default styles;