import { Text, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Communities() {
    const navigation = useNavigation()

    useFocusEffect(() => {
        const parentNav = navigation.getParent();
        if (!parentNav) return;
        parentNav.setOptions({
            headerTitle: () => (
                <View className="flex flex-row w-[75%] items-center justify-between">
                    <Text className="text-xl font-bold">Communities</Text>
                    <Feather name="search" size={24} color="black" />
                </View>    
            ),
            headerRight: () => (
                <View className="flex-row">
                    <FontAwesome5 name="user-friends" size={24} color="black" />
                    <Text>+</Text>
                </View>
            ),
            headerTitleAlign: 'center'
        })
    })

    return (
        <View>
            <Text>communities</Text>
        </View>
    )
}