import React from "react";

import {
    Button,
    Icon
} from "react-native-elements";

import { useStore } from "../../useStore";

export default function SignOutButton() {
    let [signOut] = useStore(state => [state.signOut]);
    return (
        <Button 
            type="clear"
            onPress={signOut}
            icon={
                <Icon 
                    type="material"
                    name="logout"
                />
            }
        />
    )
}