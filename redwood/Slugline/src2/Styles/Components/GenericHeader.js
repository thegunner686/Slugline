import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 2,
        width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        backgroundColor: Colors.cream.hex, 
        borderRadius: width,
        borderWidth: 0,
    }
});

export default styles;