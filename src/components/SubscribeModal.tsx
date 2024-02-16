import { Modal, Pressable, View, Text } from 'react-native';
import { useModalStore } from '@hooks/useModalStore';

export default function SubscribeModal() {
    const {isSubscribeModalShow, toggleSubscribeModal } = useModalStore(s => s)

    return (
        <Modal
        transparent={true}
        animationType="slide"
        visible={!isSubscribeModalShow}
        >
            <Pressable onPress={toggleSubscribeModal}>  
                <View className="w-full h-full opacity-60 bg-black"/> 
            </Pressable>
            <View className="absolute bottom-0 w-full h-[40%] gap-y-6 bg-white rounded-t-3xl items-center px-6">
                <View className="pr-4 gap-y-2">
                    <Text style={{fontWeight: 'bold', fontSize: 30}}>Subscribe today</Text>
                    <Text className='font-semibold'>Subscribe to Premium to be able to create a community.</Text>
                </View>
                <View className='w-full gap-y-4'>
                    <Pressable className='rounded-3xl bg-black items-center justify-center p-2 border border-gray-400'>
                        <Text  style={{color: 'white', fontSize: 18, fontWeight: '700'}}>Subscribe today</Text>
                    </Pressable>
                    <Pressable className='rounded-3xl items-center justify-center p-2 border border-gray-400'>
                        <Text  style={{fontSize: 18, fontWeight: '700'}}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
    
}