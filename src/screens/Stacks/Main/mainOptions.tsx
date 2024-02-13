import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";

export const mainOptions : NativeStackNavigationOptions  = {
    headerTitle: () => (<View><Text className="font-bold text-2xl">Y</Text></View>),
    headerLeft: () => (
        <>
        <FontAwesome name="user-circle-o" size={32} color="black" />
        </>
    ),
    headerRight: () => (<Link to={{screen: 'TimelineSettings'}}><Feather name="settings" size={24} color="black" /></Link>),
    headerTitleAlign: 'center',
    headerShadowVisible: false
}   