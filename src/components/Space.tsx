import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type SpaceProps = {
    title: string;
    categories: string[];
    currentListeners: number;
    host: string;
    hostDescription: string;
};

export default function Space({
    title,
    categories,
    currentListeners,
    host,
    hostDescription,
}: SpaceProps) {
    const withDots = [];
    for (let i = 0; i < categories.length; i++) {
        const hasNext = categories[i + 1] !== undefined;
        if (hasNext) {
            withDots.push(categories[i], ".");
        } else {
            withDots.push(categories[i]);
        }
    }

    return (
        <View className="py-2">
            <View className="bg-purple-200 p-4 rounded-t-2xl">
                <View className="gap-y-2">
                    <View className="flex-row justify-between">
                        <View className="flex-row gap-x-2">
                            <MaterialIcons
                                name="multitrack-audio"
                                size={24}
                                color="black"
                            />
                            <Text>Live</Text>
                        </View>
                        <Pressable>
                            <Entypo
                                name="dots-three-vertical"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                    </View>
                    <Text style={{ fontSize: 24, fontWeight: "600" }}>
                        {title}
                    </Text>
                    <View className="flex-row gap-x-1">
                        {withDots.map((m, i) => (
                            <Text
                                key={i}
                                style={{ color: "gray", fontSize: 16 }}
                            >
                                {m}
                            </Text>
                        ))}
                    </View>
                    <View className="flex-row gap-x-1">
                        <View className="flex-row">
                            <View className="w-[20] bg-gray-400 rounded-full border border-white z-[3]" />
                            <View className="w-[20] bg-gray-400 rounded-full border border-white z-[2] -translate-x-2" />
                            <View className="w-[20] bg-gray-400 rounded-full border border-white z-[1] -translate-x-4" />
                        </View>
                        <Text>{currentListeners} listening</Text>
                    </View>
                </View>
            </View>
            <View className="bg-purple-300 p-4 rounded-b-2xl gap-y-1">
                <View className="flex-row gap-x-2">
                    <Text className="font-bold" style={{ fontSize: 16 }}>
                        {host}
                    </Text>
                    <Text
                        className="bg-purple-400 font-bold rounded-md"
                        style={{
                            paddingVertical: 1,
                            paddingHorizontal: 2,
                            color: "white",
                        }}
                    >
                        Host
                    </Text>
                </View>
                <View>
                    <Text className="font-semibold">{hostDescription}</Text>
                </View>
            </View>
        </View>
    );
}
