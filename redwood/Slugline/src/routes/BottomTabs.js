import React from "react";

import { 
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import {
    Icon
} from "react-native-elements";

// Stacks
import ResourcesStack from "./ResourcesStack";
import ProfileStack from "./ProfileStack";
import EventsStack from "./EventsStack";

import { Colors } from "../stylesheet"

const Tabs = createBottomTabNavigator();

function BottomTabs(props) {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName, iconType;
                    switch(route.name) {
                        case "Events":
                            iconName="groups"
                            break;
                        case "Resources":
                            iconName="collections-bookmark"
                            break;
                        case "Profile":
                            iconName="person"
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
                name="Events"
                component={EventsStack}
                options={{
                    tabBarBadge: 1,
                }}
            />
            <Tabs.Screen
                name="Resources"
                component={ResourcesStack}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileStack}
            />
        </Tabs.Navigator>
    )
}

export default BottomTabs;