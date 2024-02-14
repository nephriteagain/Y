import { View, Modal, Text, Pressable } from "react-native";

import { useModalStore } from "../hooks/useModalStore";
import { AntDesign } from '@expo/vector-icons';

export default function AccountsModal() {
    const { isAccountsModalShow, toggleAccountsModal } = useModalStore(s => s)

    return (
        <Modal 
        visible={isAccountsModalShow}
        animationType="slide"
        >
            <Pressable onPress={toggleAccountsModal}>                
                <View className="w-full h-full opacity-60 bg-black"/> 
            </Pressable>
            <View className="absolute bottom-0 w-full h-[45%] bg-white rounded-t-3xl px-10 py-2 gap-y-6">
                <Text className="font-bold text-2xl">Accounts</Text>
                <View className="flex-row items-center justify-between">
                    <View className="flex-row gap-x-2 items-center">
                        <View className="bg-gray-300 aspect-square rounded-full" style={{width:50}} />
                        <View>
                            <Text className="font-bold text-lg">nephriteagain</Text>
                            <Text className="text-gray-600">@nephriteagain</Text>
                        </View>
                    </View>                   
                    <AntDesign name="checkcircle" size={16} color="green" />
                </View>                
                <Pressable className="w-full border-2 border-gray-400 items-center justify-center py-3 rounded-3xl">
                    <Text className="font-bold text-lg">
                        Create an new account
                    </Text>
                </Pressable>
                <Pressable className="w-full border-2 border-gray-400 items-center justify-center py-3 rounded-3xl">
                    <Text className="font-bold text-lg">
                        Add an existing account                        
                    </Text>
                </Pressable>
            </View>

        </Modal>

    )
}