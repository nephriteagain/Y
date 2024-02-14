import { View, Text, TextInput } from "react-native"
import { useNavigation, Link, useFocusEffect } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';


export default function Messages() {
    const navigation = useNavigation()


    useFocusEffect(() => {
        const parentNav = navigation.getParent();
        if (!parentNav) return;
        parentNav.setOptions({
            headerTitle: () => (
                <TextInput 
                placeholder="Seach Direct Messages"  
                className="bg-gray-200 px-4 py-1 w-[75%] rounded-xl border border-gray-300" 
                />
            ),
            headerRight: () => (<Link to={{screen: 'TimelineSettings'}}><Feather name="settings" size={24} color="black" /></Link>),
            headerTitleAlign: 'center'
        })
    })

    return (
        <View>
            <Text>messages</Text>
        </View>
    )
}