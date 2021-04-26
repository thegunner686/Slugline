import {
    Dimensions,
    StyleSheet
} from "react-native";

import { Colors, Fonts } from "../../stylesheet";

let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.cream.rgba(0.2),
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    contentContainer: {
        flex: 1,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 30,
        borderColor: Colors.dark.rgba(0.1),
        borderWidth: 1,
        marginTop: 10,
    },
    uploadPictureButton: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 0,
    },
    uploadPictureButtonContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    uploadPictureButtonTitle: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.small,
    },

    displayName: {
        fontFamily: Fonts.types.bold,
        fontSize: Fonts.sizes.medium,
        color: Colors.dark.hex,
        marginTop: 5,
        marginBottom: 5
    },
    college: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.standard,
        color: Colors.dark.hex,
    },
    email: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.standard,
        color: Colors.dark.hex,
        marginTop: 0,
        marginBottom: 5
    },
    pronouns: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.standard,
        color: Colors.dark.hex,
    },
    editButtonContainer: {
        width: width / 4 * 3,
        borderRadius: width,
    },
    editButton: {
        backgroundColor: Colors.darkBlue.hex,
        width: width / 4 * 3,
        borderRadius: width,
    },
    editTitle: {
        fontFamily: Fonts.types.light,
        fontSize: Fonts.sizes.standard,
        color: "white"
    }
})
export default styles;