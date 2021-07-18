import React from "react";

import {
    Button
} from "react-native-elements";

import { useStore } from "../../useStore";

export default function SignOutButton() {
    let [signOut] = useStore(state => [state.signOut]);
    return (
        <Button 
            title="Sign Out"
            onPress={signOut}
        />
    )
}