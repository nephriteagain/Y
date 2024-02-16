import { faker } from "@faker-js/faker";
import { Text, View } from "react-native";

export default function Monetization() {
    return (
        <View className="p-4 gap-y-4">
            <View className="gap-y-3">
                <Text style={{fontSize:18, fontWeight: 'bold'}}>Available programs</Text>
                <Text style={{color: 'gray', fontSize: 16}}>{faker.lorem.words(15)}</Text>
            </View>
            <View className="gap-y-6">
                <View className="border-2 border-gray-400 rounded-xl p-4 gap-y-1">
                    <Text className="bg-pink-600 text-white self-start px-2 py-1 font-semibold rounded-lg">Not yet eligible</Text>
                    <Text className="font-bold text-xl">Subscriptions</Text>
                    <Text style={{color: 'gray', fontWeight: '600'}}>{faker.lorem.words(12)}</Text>
                </View>
                <View className="border-2 border-gray-400 rounded-xl p-4 gap-y-1">
                    <Text className="bg-pink-600 text-white self-start px-2 py-1 font-semibold rounded-lg">Not yet eligible</Text>
                    <Text className="font-bold text-xl">Subscriptions</Text>
                    <Text style={{color: 'gray', fontWeight: '600'}}>{faker.lorem.words(11)}</Text>
                    <Text style={{color: 'gray', fontWeight: '600'}}>{faker.lorem.words(15)}</Text>
                </View>
            </View>
        </View>
    )
}
