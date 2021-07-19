import React from "react";

import { 
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import {
    Icon
} from "react-native-elements";

// Stacks
import ResourcesStack from "./ResourcesStack";
import SettingsStack from "./SettingsStack";
import CommunityStack from "./CommunityStack";

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
                activeTintColor: Colors.Blue4.rgb,
                inactiveTintColor: Colors.Black.rgb,
                style: {
                    backgroundColor: Colors.White.rgb
                }
            }}
        >
            <Tabs.Screen
                name="Community"
                component={CommunityStack}
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