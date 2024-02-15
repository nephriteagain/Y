import { Text, View, ScrollView, Pressable } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useModalStore } from "../../../hooks/useModalStore";
import { faker } from "@faker-js/faker";

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Community from "../../../components/Community";
import CommunitiesModal from "../../../components/CommunitiesModal";

const fakeCommunities = Array.from({length:10}, () => ({
    id: faker.string.alphanumeric(5),
    communityName: faker.company.name(),
    memberTotal: faker.number.int({min:10, max: 999})
}))

export default function Communities() {
    const navigation = useNavigation()
    const toggleModal = useModalStore(s => s.toggleCommunitiesModal)

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
        <>
        <View className="p-4 gap-y-4">
            <View className="flex-row justify-between">
                <Text className="text-xl font-bold">Discover new Communities</Text>
                <Pressable onPress={toggleModal}>
                    <Entypo name="dots-three-vertical" size={16} color="gray" />
                </Pressable>
            </View>
            <ScrollView>
                {fakeCommunities.map(c => {
                    return <Community key={c.id} {...c}  />
                })}
            </ScrollView>
        </View>
        <CommunitiesModal />
        </>
    )
}