import React from "react";
import { 
    Icon 
} from "react-native-elements";

import { Colors } from "../Styles/stylesheet";

function CloseButtonIcon(props) {
    return (
        <Icon
            name="close"
            type="material-community"
            color={Colors.darkBlue.hex}
            size={30}
            style={{ margin: 10 }}
        />
    )
}

export default CloseButtonIcon;