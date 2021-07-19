import React from "react";

import {
    Button
} from "react-native-elements";

export default function AskASlugButton({ onPress }) {
    return (
        <Button 
            title="Need Help? Ask a Slug!"
            onPress={onPress}
        />
    )
}