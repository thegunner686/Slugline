import React from "react";

import { View } from "react-native";

function BufferView(props) {
    return (<View {...props} style={[props.style, { flex: 1 }]}>{props.children}</View>);
}

export default BufferView;