import { faker } from "@faker-js/faker"
import { View, Text, ScrollView, Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const fakeLists = Array.from({length:3}, () => ({
    name: faker.commerce.productMaterial(),
    id: faker.string.alphanumeric(5),
    members: faker.number.int({min:100, max:999}),
    followers: faker.number.int({min:1000, max: 9999}),
    inc: `@${faker.person.firstName()}`
}))

export default function Lists() {
    return (
        <View className="py-4 relative">
        <ScrollView className="gap-y-4 px-4">
            <View className="gap-y-4">
                <Text className="font-bold" style={{fontSize:20}}>Pinned Lists</Text>
                <View style={{height: 120}} className="items-center justify-center px-8 bg-gray-200 rounded-lg">
                    <Text style={{fontSize: 16, color: 'gray'}}>Nothing to see here yet - pin your favorite Lists to access them quickly.</Text>
                </View>
            </View>
            <View>
                <Text className="font-bold pb-8" style={{fontSize:20}}>Discover new Lists</Text>
                <ScrollView className="gap-y-6">
                    {fakeLists.map(({id, members, followers, inc, name}) => {
                        return (
                            <View key={id} className="flex-row gap-x-2 justify-between items-center">
                                <View>
                                    <View className="w-[50] aspect-square bg-gray-300 rounded-lg" />
                                </View>
                                <View className="justify-between">
                                    <View className="flex-row gap-x-1 items-end">
                                        <Text style={{fontSize: 18}}>{name}.</Text>
                                        <Text style={{color: 'gray'}}>{members} members</Text>
                                    </View>
                                    <View className="flex-row gap-x-1">
                                        <Text style={{color: 'gray'}}>{followers} followers</Text>
                                        <Text style={{color: 'gray'}}>including {inc.substring(0,5)}...</Text>
                                    </View>
                                </View>
                                <View className="justify-center items-center">
                                    <Entypo name="circle-with-plus" size={28} color="black" />
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
                <Text className="pt-4 font-semibold text-blue-600" style={{fontSize: 16}}>Show more</Text>
            </View>
            <View>
                <Text className="font-bold pb-8" style={{fontSize:20}}>Your Lists</Text>
                <View style={{height: 120}} className="items-center justify-center px-8 bg-gray-200 rounded-lg">
                    <Text style={{fontSize: 14, color: 'gray'}}>You haven't created or followed any Lists. When you do, they'll show up here.</Text>
                </View>
            </View>
        </ScrollView>
        <Pressable className="absolute right-4 bottom-8 bg-blue-400 rounded-full p-4">
            <MaterialIcons name="playlist-add" size={28} color="white" />
        </Pressable>
        </View>
    )
}