import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import IntentScreen from "../Screens/Authenticated/IntentScreen";
import SubmitIntentScreen from "../Screens/Authenticated/SubmitIntentScreen";

import styles from "../Styles/Routes/IntentStack";

import RightHeaderBar from "../Components/RightHeaderBar";
import BackButtonIcon from "../Components/BackButtonIcon";
import CloseButtonIcon from "../Components/CloseButtonIcon";

let Stack = createStackNavigator();

function IntentStack(props) {
    return (
        <Stack.Navigator
            headerMode="float"
            initialRouteName="Intent"
            screenOptions={{
                safeAreaInsets: styles.topInset
            }}
        >
            <Stack.Screen
                name="Intent"
                component={IntentScreen}
                options={{
                    headerStyle: styles.header,
                    headerTitle: "",
                    headerTitleStyle: styles.headerTitle,
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <CloseButtonIcon/>
                    )
                }}
            />
            <Stack.Screen
                name="SubmitIntent"
                component={SubmitIntentScreen}
                options={{
                    headerStyle: styles.header,
                    headerTitle: "",
                    headerTitleStyle: styles.headerTitle,
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <BackButtonIcon/>
                    ),
                    headerRight: () => (
                        <RightHeaderBar 
                            hideLogout={true}
                            hideHistory={true}
                            hideProfile={true}
                            {...props} 
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default IntentStack;