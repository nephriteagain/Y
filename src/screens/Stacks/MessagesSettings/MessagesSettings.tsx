import { faker } from "@faker-js/faker";
import { Text, View, ScrollView } from "react-native";
import { RadioButton, Switch } from "react-native-paper";

export default function MessagesSettings() {
    return (
        <ScrollView className="p-4">
            <View className="gap-y-2">
                <View>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                        Allow message requests from:
                    </Text>
                    <Text className="font-semibold">
                        {faker.lorem.words(10)}
                    </Text>
                    <Text className="font-semibold text-blue-400">
                        Learn more
                    </Text>
                </View>
                <View className="gap-y-4">
                    <View className="flex-row justify-between items-center">
                        <Text
                            className="font-semibold"
                            style={{ fontSize: 16 }}
                        >
                            No one
                        </Text>
                        <RadioButton value="No one" />
                    </View>
                    <View className="flex-row justify-between items-center">
                        <Text
                            className="font-semibold"
                            style={{ fontSize: 16 }}
                        >
                            Verified users
                        </Text>
                        <RadioButton value="Verified users" />
                    </View>
                    <View className="flex-row justify-between items-center">
                        <Text
                            className="font-semibold"
                            style={{ fontSize: 16 }}
                        >
                            Everyone
                        </Text>
                        <RadioButton value="Everyone" />
                    </View>
                </View>
                <View className="w-full border border-gray-400" />
            </View>
        </ScrollView>
    );
}
