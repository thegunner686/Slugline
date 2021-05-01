import React from "react";

import { 
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import {
    Icon
} from "react-native-elements";

// Stacks
import SolveStack from "./SolveStack";
import NavigateStack from "./NavigateStack";
import ReportStack from "./ReportStack";
import ProfileStack from "./ProfileStack";

// Screens
import SolveScreen from "../screens/SolveScreen"
import NavigateScreen from "../screens/NavigateScreen"
import ReportScreen from "../screens/ReportScreen"
import ProfileScreen from "../screens/ProfileScreen"


import { Colors } from "../stylesheet"

const Tabs = createBottomTabNavigator();

function BottomTabs(props) {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName, iconType;
                    switch(route.name) {
                        case "Solve":
                            iconName="search"
                            break;
                        case "Navigate":
                            iconName="navigation"
                            break;
                        case "Report":
                            iconName="report"
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
                activeTintColor: Colors.Blue4.hex,
                inactiveTintColor: Colors.Black.hex,
            }}
        >
            <Tabs.Screen
                name="Solve"
                component={SolveScreen}
            />
            <Tabs.Screen
                name="Navigate"
                component={NavigateScreen}
            />
            <Tabs.Screen
                name="Report"
                component={ReportScreen}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tabs.Navigator>
    )
}

export default BottomTabs;