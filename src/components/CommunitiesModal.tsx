import { Modal, View, Text, Pressable } from "react-native";
import { useModalStore } from "@hooks/useModalStore";
import { Entypo } from "@expo/vector-icons";

export default function CommunitiesModal() {
    const { isCommunitiesModalShow, toggleCommunitiesModal } = useModalStore(
        (s) => s,
    );

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isCommunitiesModalShow}
        >
            <Pressable onPress={toggleCommunitiesModal}>
                <View className="w-full h-full opacity-60 bg-black" />
            </Pressable>
            <View className="flex-row absolute bottom-0 w-full h-[15%] bg-white rounded-t-3xl items-center px-6">
                <View className="pr-4">
                    <Entypo name="emoji-sad" size={24} color="gray" />
                </View>
                <Text className="text-lg text-gray-700">See less often</Text>
            </View>
        </Modal>
    );
}
