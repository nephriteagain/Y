import { View, Text } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import type { NotificationsTopTabParamList } from "../../../types";

import All from "../../Tabs/All";
import Verified from "../../Tabs/Verified";
import Mentions from "../../Tabs/Mentions";

const TopTab = createMaterialTopTabNavigator<NotificationsTopTabParamList>()

export default function Notifications() {

    const navigation = useNavigation()

    useFocusEffect(() => {
        const parentNav = navigation.getParent();
        if (!parentNav) return;
        parentNav.setOptions({
            headerTitle: () => (
                <View className="w-[75%]">
                    <Text className="text-xl font-bold">Notifications</Text>    
                </View>
            ),
            headerRight: () => (<Link to={{screen: 'NotificationSettings'}}><Feather name="settings" size={24} color="black" /></Link>),
            headerTitleAlign: 'center'
        })
    })

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