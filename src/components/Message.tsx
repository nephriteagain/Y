import { View, Text } from "react-native"
import type { Message } from "@types"

export default function Message({displayName, userName, date, message}: Message) {
    return (
        <View className="flex-row py-3">
            <View className="basis-[20%]">
                <View className="bg-gray-300 w-[85%] aspect-square rounded-full shadow" />                
            </View>
            <View className="basis-[80%]">
                <View className="flex-row gap-x-2 items-center overflow-hidden">
                    <Text 
                    className="font-bold" 
                    style={{fontSize:16}}>
                        {displayName}
                    </Text>
                    <Text className="text-gray-500">@{userName}</Text>
                    <Text className="text-gray-500">{date}</Text>
                </View>
                <View>
                    <Text className="text-gray-500">{message}</Text>
                </View>
            </View>
        </View>
    )
}