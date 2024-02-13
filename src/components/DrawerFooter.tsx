import { View, Text } from "react-native";

export default function DrawerFooter() {
    return (
        <View className="gap-y-4 pb-6 px-4"> 
            <View className="border-t border-black pb-6" />
            <Text className="text-xl font-bold">Professional Tools</Text>
            <Text className="text-xl font-bold">Settings & Support</Text>
        </View>
    )
}