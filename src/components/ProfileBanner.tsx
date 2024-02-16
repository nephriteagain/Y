import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { faker } from "@faker-js/faker";

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function ProfileBanner() {
    const nav = useNavigation()
    
    return (
        <View>
            <View className="relative w-full" style={{height: 160}}>
                <View className="absolute top-0 left-0 w-full h-full bg-blue-400" />
                <View className="flex-row justify-between p-4">
                    <Pressable className="p-1 items-center justify-center bg-blue-800 rounded-full"
                    onPress={() => nav.goBack()}
                    >
                        <MaterialIcons name="arrow-back" size={24} color="white" />
                    </Pressable>
                    <View className="flex-row gap-x-4">
                        <View className="p-1 items-center justify-center bg-blue-800 rounded-full">
                            <Feather name="search" size={24} color="white" />
                        </View>
                        <View className="p-1 items-center justify-center bg-blue-800 rounded-full">
                            <Entypo name="dots-three-vertical" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </View>
            <View className="relative w-full p-4 gap-y-3">
                <View className="absolute left-4 -top-[40] bg-gray-300 rounded-full">
                    <FontAwesome name="user-circle-o" size={80} color="black" />
                </View>
                <View className="items-end">
                    <Pressable className="border border-gray-400 rounded-xl py-1 px-2">
                        <Text className="font-semibold" style={{fontSize:16}}>Edit Profile</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={{fontSize:24, fontWeight: 'bold'}}>twitteruser</Text>
                    <Text className="font-semibold opacity-70" style={{fontSize:16}}>@twitteruser</Text>
                </View>
                <View className="flex-row gap-x-3">
                    <View className="flex-row">
                        <Ionicons name="balloon-outline" size={24} color="black" />
                        <Text className="pl-2">Born {faker.date.birthdate().toDateString().split(' ').splice(1).join(' ')}</Text>
                    </View>
                    <View className="flex-row">
                        <Fontisto name="date" size={24} color="black" />
                        <Text className="pl-2">Joined {faker.date.past({years:8}).toDateString().split(' ').splice(1).join(' ')}</Text>
                    </View>
                </View>
            </View>
            <View className="px-4 flex-row gap-x-4">
                <Text style={{fontSize: 16}} >
                    <Text className="font-bold">33 </Text><Text>Following</Text>
                </Text>
                <Text style={{fontSize: 16}} >
                    <Text className="font-bold">11 </Text><Text>Followers</Text>
                </Text>
            </View>
        </View>
    )
}