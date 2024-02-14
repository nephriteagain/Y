import { View, Text } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";

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
            headerRight: () => (<Link to={{screen: 'TimelineSettings'}}><Feather name="settings" size={24} color="black" /></Link>),
            headerTitleAlign: 'center'
        })
    })

    return (
        <View>
            <Text>notifications</Text>
        </View>
    )
}