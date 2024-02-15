import { Text, View } from "react-native";

export default function TimelineSettings() {
    return (
        <View className="h-full items-center justify-center p-6">
            <View className="gap-y-4">
                <Text className="font-bold" style={{fontSize: 32}}>Nothing here yet</Text>
                <Text className="font-semibold text-gray-500" style={{fontSize:16}}>
                    Try pinning a <Text style={{color: 'skyblue'}}>List</Text> or a <Text style={{color: 'skyblue'}}>Community</Text> to have easier access to your favorite content.
                </Text>
            </View>
        </View>
    )
}