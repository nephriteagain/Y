import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import type { NotificationsTopTabParamList } from "@types";
const TopTab = createMaterialTopTabNavigator<NotificationsTopTabParamList>()

import All from "./All";
import Verified from "./Verified";
import Mentions from "./Mentions";

export default function NotificationsTopTab() {
    return (
        <TopTab.Navigator
        screenOptions={{
            tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 14,
            }
        }}
        >
            <TopTab.Screen
            name="All"
            component={All}
            />
            <TopTab.Screen
            name="Verified"
            component={Verified}
            />
            <TopTab.Screen
            name="Mentions"
            component={Mentions}
            />
        </TopTab.Navigator>
    )
}