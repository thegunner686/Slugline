import React from "react";

import {
    Button,
    Icon
} from "react-native-elements";

import { useStore } from "../../useStore";

import { Colors } from "../../stylesheet";

export default function SignOutButton({ color }) {
    let [signOut] = useStore(state => [state.signOut]);
    return (
        <Button 
            type="clear"
            onPress={signOut}
            icon={
                <Icon 
                    type="material"
                    name="logout"
                    color={color ? color : Colors.Black.rgb}
                />
            }
        />
    )
}