import { View, Text } from "react-native";
import type { Post } from "../types";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function SinglePost({
    displayName,
    userName,
    date,
    post,
    engagements
} : Post) {
    const { reply, retweet, likes, views } = engagements

    return (
        <View className="flex-row w-full border-b border-gray-300">
            <View className="basis-[20%] p-2">
                <View className="bg-gray-300 w-[85%] aspect-square rounded-full shadow" />     
            </View>
            <View className="basis-[80%] p-2 pl-0">
                <View className="flex-row gap-x-2">
                    <Text className="font-bold">{displayName}</Text>
                    <Text className="opacity-70">{userName}</Text>
                    <Text className="opacity-70">{date}</Text>
                </View>
                <View className="pt-2">
                    <Text>{post}</Text>
                </View>
                <View className="p-2 pl-0 flex-row items-center justify-between">
                    <View className="flex-row gap-x-1 items-center">
                        <MaterialCommunityIcons name="message-reply-outline" size={16} color="gray" />
                        <Text className="opacity-70">{reply}</Text>
                    </View>
                    <View className="flex-row gap-x-1 items-center">
                        <FontAwesome5 name="retweet" size={16} color="gray" />
                        <Text className="opacity-70">{retweet}</Text>
                    </View>
                    <View className="flex-row gap-x-1 items-center">
                        <AntDesign name="hearto" size={16} color="gray" />
                        <Text className="opacity-70">{likes}</Text>
                    </View>
                    <View className="flex-row gap-x-1 items-center">
                        <Ionicons name="stats-chart-sharp" size={16} color="gray" />
                        <Text className="opacity-70">{viewsFormatter(views)}</Text>
                    </View>
                    <AntDesign name="sharealt" size={16} color="gray" />
                </View>
            </View>
        </View>
    )
}

function viewsFormatter(num: number): string {
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(0)}b`;
    }
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(0)}m`;
    }
    if (num >= 1_000) {
      return `${(num / 1_000).toFixed(2)}k`;
    }
  
    return `${num}`;
  }
  