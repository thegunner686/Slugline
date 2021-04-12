import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    checkboxContainer: {
        backgroundColor: Colors.cream.hex, 
        borderRadius: width,
        borderWidth: 0,
    }
});

export default styles;