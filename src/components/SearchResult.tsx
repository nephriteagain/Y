import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function SearchResult({
    displayName,
    userName,
}: {
    displayName: string;
    userName: string;
}) {
    const random = Math.random();
    return (
        <View className="w-screen py-2 flex-row gap-x-4 items-center">
            <View className="basis-[1/8]">
                <View
                    className="bg-gray-300 aspect-square rounded-full shadow"
                    style={{ width: 50 }}
                />
            </View>
            <View className="basis-[7/8]">
                <View className="flex-row gap-x-2 items-center">
                    <Text className="font-bold" style={{ fontSize: 16 }}>
                        {displayName}
                    </Text>
                    {random > 0.66 ? (
                        <AntDesign name="checkcircle" size={12} color="blue" />
                    ) : random > 0.33 ? (
                        <Fontisto name="locked" size={12} color="black" />
                    ) : (
                        ""
                    )}
                </View>
                <Text className="font-semibold opacity-70">@{userName}</Text>
            </View>
        </View>
    );
}
