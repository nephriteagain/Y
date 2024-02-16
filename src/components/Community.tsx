import { View, Text } from "react-native";

export default function Community({
    communityName,
    memberTotal,
}: {
    communityName: string;
    memberTotal: number;
}) {
    return (
        <View className="w-full flex-row gap-x-4 pb-4">
            <View className="basis-1/3">
                <View className="bg-gray-300 rounded-lg w-full aspect-square" />
            </View>
            <View className="basis-2/3 justify-between">
                <View>
                    <Text className="text-lg font-semibold">
                        {communityName}
                    </Text>
                    <Text className="text-gray-500">{memberTotal} Members</Text>
                </View>
                <View className="flex-row pb-1 relative">
                    <View className="z-[5] w-10 aspect-square bg-gray-400 rounded-full shadow border border-white" />
                    <View className="z-[4] absolute left-[25] w-10 aspect-square bg-gray-400 rounded-full shadow border border-white" />
                    <View className="z-[3] absolute left-[50] w-10 aspect-square bg-gray-400 rounded-full shadow border border-white" />
                    <View className="z-[2] absolute left-[75] w-10 aspect-square bg-gray-400 rounded-full shadow border border-white" />
                    <View className="z-[1] absolute left-[100] w-10 aspect-square bg-gray-400 rounded-full shadow border border-white" />
                </View>
            </View>
        </View>
    );
}
