import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { View, Text } from "react-native";


export const homeOptions : NativeStackNavigationOptions = {
    headerTitle: () => (<View><Text className="font-bold text-2xl">Y</Text></View>),
    headerLeft: () => (<View className="w-10 h-10 bg-gray-500"></View>),
    headerRight: () => (<View className="w-10 h-10 bg-gray-500"></View>),
    headerTitleAlign: 'center',
    headerShadowVisible: false
}