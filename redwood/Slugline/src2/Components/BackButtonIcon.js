import React from "react";
import { 
    Icon 
} from "react-native-elements";

import { Colors } from "../Styles/stylesheet";

function BackButtonIcon(props) {
    return (
        <Icon
            name="chevron-left"
            type="material-community"
            color={Colors.darkBlue.hex}
            size={30}
            style={{ margin: 10 }}
        />
    )
}

export default BackButtonIcon;