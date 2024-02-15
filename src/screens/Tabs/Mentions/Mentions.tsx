import { View, Text } from "react-native"

export default function Mentions() {
    return (
        <View className="p-8 items-center justify-center h-full">
            <View className="gap-y-2">
                <Text className="font-semibold text-4xl">Join the</Text>
                <Text className="font-semibold text-4xl">conversation</Text>
                <Text className="font-semibold" style={{fontSize: 16, color: 'gray'}}>When someone you're following mentions you in a post, you'll see it here.</Text>
            </View>
        </View>
    )
}
