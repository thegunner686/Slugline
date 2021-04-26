import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    topInset: {
        top: height / 15
    },
    header: {
        backgroundColor: Colors.cream.hex,
    },
    headerTitle: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
        color: Colors.darkBlue.hex
    }
});

export default styles;