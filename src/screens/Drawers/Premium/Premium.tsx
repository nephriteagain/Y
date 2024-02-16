import { View, Text, ScrollView, Pressable } from "react-native";
import { faker } from "@faker-js/faker";
import { Feather } from "@expo/vector-icons";

const fakeWords = Array.from({ length: 10 }, () =>
    faker.lorem.words({ min: 1, max: 4 }),
);

export default function Premium() {
    return (
        <View className="p-4 gap-y-4">
            <View className="p-8 items-center justify-center bg-gray-300 rounded-lg">
                <Text className="text-3xl font-bold">Premium+</Text>
            </View>
            <ScrollView className="gap-y-2 py-2 px-8">
                <Text className="font-bold text-xl">Enchanced Experience</Text>
                {fakeWords.map((w, i) => (
                    <View key={i} className="flex-row justify-between">
                        <Text
                            className="font-semibold"
                            style={{ fontSize: 16 }}
                        >
                            {w}
                        </Text>
                        <Feather name="check" size={24} color="green" />
                    </View>
                ))}
            </ScrollView>
            <View className="py-6">
                <Pressable className="bg-black items-center justify-center py-3 rounded-3xl">
                    <Text className="text-white text-xl font-bold">
                        Starting at &#8369;1,250.00
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
