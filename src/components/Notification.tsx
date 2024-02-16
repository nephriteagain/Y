import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Notification({
    displayName,
    message,
}: {
    displayName: string;
    message: string;
}) {
    return (
        <View className="relative w-full flex-row p-4 border-b border-gray-300 shadow">
            <View className="basis-1/8 pl-2 pr-4">
                <AntDesign name="heart" size={24} color="red" />
            </View>
            <View className="basis-7/8 gap-y-2 pr-4">
                <View className="w-[40] aspect-square bg-gray-300 rounded-full shadow" />
                <Text className="text-lg">
                    <Text className="font-bold">{`${displayName} `}</Text>
                    <Text>liked your reply</Text>
                </Text>
                <Text className="font-semibold opacity-70">{message}</Text>
            </View>
            <View className="absolute top-4 right-4">
                <Entypo name="dots-three-vertical" size={16} color="gray" />
            </View>
        </View>
    );
}
