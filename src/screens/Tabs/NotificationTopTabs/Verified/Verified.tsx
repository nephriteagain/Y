import { View, Text, Pressable } from "react-native"

export default function Verified() {
    return (
        <View className="items-center justify-center p-8">
            <View className="pt-[60] gap-y-4">
                <View>
                    <Text className="text-5xl font-semibold">Nothing to see here </Text>
                    <Text className="text-4xl font-semibold">— yet</Text>
                </View>
                <Text className="opacity-60 font-semibold" style={{fontSize:16}}>Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you’ll find it here. <Text className="text-blue-500">Learn more</Text></Text>
                <Text className="opacity-60 font-semibold" style={{fontSize:16}}>Not Verified? Subscribe now to get a verified account and join other people in quality conversations.</Text>
                <View className="gap-y-4">
                    <Pressable className="w-full items-center justify-center bg-black rounded-3xl p-3">
                        <Text className="text-white text-lg font-semibold">Subscribe</Text>
                    </Pressable>
                    <Pressable className="w-full items-center justify-center rounded-3xl p-3">
                        <Text className="text-lg font-semibold">PHP 600.00/month</Text>
                    </Pressable>
                </View>
                
            </View>            
        </View>
    )
}