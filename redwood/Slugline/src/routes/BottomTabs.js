import React from "react";

import { 
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import {
    Icon
} from "react-native-elements";

// Screens
import CommunityScreen from "../screens/CommunityScreen"
import ResourcesScreen from "../screens/ResourcesScreen"
import SettingsScreen from "../screens/SettingsScreen"

// Stacks
import ResourcesStack from "./ResourcesStack";
import SettingsStack from "./SettingsStack";

import { Colors } from "../stylesheet"

const Tabs = createBottomTabNavigator();

function BottomTabs(props) {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName, iconType;
                    switch(route.name) {
                        case "Community":
                            iconName="groups"
                            break;
                        case "Resources":
                            iconName="collections-bookmark"
                            break;
                        case "Settings":
                            iconName="settings"
                            break;
                        default:
                            break;
                    }

                    return (<Icon 
                        type="material"
                        name={iconName}
                        color={color}
                    />);
                }
            })}
            tabBarOptions={{
                activeTintColor: Colors.White.rgb,
                inactiveTintColor: Colors.Grey5.rgb,
                style: {
                    backgroundColor: Colors.Blue1.rgb
                }
            }}
        >
            <Tabs.Screen
                name="Community"
                component={CommunityScreen}
                options={{
                    tabBarBadge: 1,
                }}
            />
            <Tabs.Screen
                name="Resources"
                component={ResourcesStack}
            />
            <Tabs.Screen
                name="Settings"
                component={SettingsStack}
            />
        </Tabs.Navigator>
    )
}

export default BottomTabs;