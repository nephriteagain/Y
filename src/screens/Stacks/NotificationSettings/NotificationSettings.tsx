import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function NotificationSettings() {
    return (
        <View className="p-4 gap-y-4">
            <View>
                <Text style={{ fontWeight: "bold" }}>
                    Select the kinds of notification you get about your
                    activities, interests, and recommendations.
                </Text>
            </View>
            <View className="gap-x-2 gap-y-6">
                <View className="flex-row">
                    <View className="basis-1/6 justify-center">
                        <Ionicons name="filter" size={28} color="black" />
                    </View>
                    <View className="basis-5/6">
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "700" }}>
                                Filters
                            </Text>
                            <Text>
                                Choose the notification you'd like to see
                            </Text>
                            <Text>-and those you don't.</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-row justify-center">
                    <View className="basis-1/6">
                        <Feather name="smartphone" size={28} color="black" />
                    </View>
                    <View className="basis-5/6">
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>
                            Preferences
                        </Text>
                        <Text>
                            Select your preferences by notification type.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
