import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../Screens/Authenticated/ProfileScreen";
import MessageScreen from "../Screens/Authenticated/MessageScreen";
import MessageSubmitScreen from "../Screens/Authenticated/MessageSubmitScreen";

import styles from "../Styles/Routes/HomeStack";

import LeftHeaderBar from "../Components/LeftHeaderBar";
import RightHeaderBar from "../Components/RightHeaderBar";
import BackButtonIcon from "../Components/BackButtonIcon";
import CloseButtonIcon from "../Components/CloseButtonIcon";

let Stack = createStackNavigator();

function MessageStack(props) {
    return (
        <Stack.Navigator
            headerMode="float"
            initialRouteName="Message"
            screenOptions={{
                safeAreaInsets: styles.topInset
            }}
        >
            <Stack.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    headerStyle: styles.header,
                    headerTitle: "",
                    headerTitleStyle: styles.headerTitle,
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <CloseButtonIcon/>
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
            <Stack.Screen
                name="MessageSubmit"
                component={MessageSubmitScreen}
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

export default MessageStack;