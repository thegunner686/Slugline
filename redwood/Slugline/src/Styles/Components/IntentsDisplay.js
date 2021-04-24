import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingBottom: height / 10,
        paddingTop: height / 20,
        width
    }
})
export default styles;