import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { BottomTabParamList } from "@types";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Home from "./Home";
import Communities from "./Communities";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Search from "./Search";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                lazy: true, // lazy load not shown screens
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    lazy: false, // only home is loaded first
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="home-filled"
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="search-sharp" size={24} color="black" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Communities"
                component={Communities}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5
                            name="user-friends"
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="notifications"
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: () => (
                        <Feather name="mail" size={24} color="black" />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}
