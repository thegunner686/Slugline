import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../stylesheet";

let { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    rightHeaderBarContainer: {
        width: width / 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 1,
        shadowColor: Colors.dark.hex,
        shadowOpacity: 0.3,
    },
    badgeText: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
    },
    badgeContainer: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 10,
        marginRight: 10
    }
});

export default styles;