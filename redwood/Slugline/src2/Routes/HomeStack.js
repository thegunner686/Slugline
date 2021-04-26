import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/Authenticated/HomeScreen";
import ProfileScreen from "../Screens/Authenticated/ProfileScreen";

import styles from "../Styles/Routes/HomeStack";

import LeftHeaderBar from "../Components/LeftHeaderBar";
import RightHeaderBar from "../Components/RightHeaderBar";
import BackButtonIcon from "../Components/BackButtonIcon";
import CloseButtonIcon from "../Components/CloseButtonIcon";

let Stack = createStackNavigator();

function HomeStack(props) {
    return (
        <Stack.Navigator
            headerMode="float"
            initialRouteName="Home"
            screenOptions={{
                safeAreaInsets: styles.topInset
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    headerStyle: styles.header,
                    headerTitle: "",
                    headerTitleStyle: styles.headerTitle,
                    headerLeft: () => (
                        <LeftHeaderBar {...props} />
                    ),
                    headerRight: () => (
                        <RightHeaderBar hideLogout={true} {...props} />
                    )
                }}
            />
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
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
                            hideProfile={true}
                            hideHistory={true}
                            {...props} 
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack;