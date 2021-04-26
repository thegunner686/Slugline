import React from "react";

import { 
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

// Stacks
import SolveStack from "./SolveStack";
import NavigateStack from "./NavigateStack";
import ReportStack from "./ReportStack";
import ProfileStack from "./ProfileStack";

const Tabs = createBottomTabNavigator();

function BottomTabs(props) {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="Solve"
                component={SolveStack}
            />
            <Tabs.Screen
                name="Navigate"
                component={NavigateStack}
            />
            <Tabs.Screen
                name="Report"
                component={ReportStack}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileStack}
            />
        </Tabs.Navigator>
    )
}

export default BottomTabs;