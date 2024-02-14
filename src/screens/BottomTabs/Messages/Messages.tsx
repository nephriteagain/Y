import { View, Text, TextInput } from "react-native"
import { useNavigation, Link, useFocusEffect } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import Message from "../../../components/Message";
import { faker } from "@faker-js/faker";
import type { Message as MessageType } from "../../../types";

const fakeMessages : MessageType[] = Array.from({length:10}, () => ({
    id: faker.string.alphanumeric(5),
    displayName: faker.person.firstName(),
    userName: faker.person.firstName(),
    date: faker.date.recent().toDateString().split(' ').splice(1).join(' '),
    message: faker.lorem.sentences({min:1, max: 4})

}))


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
            headerRight: () => (<Link to={{screen: 'MessagesSettings'}}><Feather name="settings" size={24} color="black" /></Link>),
            headerTitleAlign: 'center'
        })
    })

    return (
        <View className="p-4">
            {fakeMessages.map(m => {
                return <Message key={m.id} {...m} />
            })}
        </View>
    )
}