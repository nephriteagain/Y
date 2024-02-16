import { View, Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useModalStore } from '../hooks/useModalStore';

import AccountsModal from './AccountsModal';

export default function DrawerHeader() {

    const toggleModal = useModalStore(s => s.toggleAccountsModal)

    return (
        <>
        <AccountsModal />
        <View className='relative gap-y-2 px-4 pt-8'>
            <FontAwesome name="user-circle-o" size={42} color="black" />
            <Pressable 
            className='absolute top-8 right-4 border-2 border-black rounded-full p-1'
            onPress={toggleModal}
            >
                <Entypo name="dots-three-vertical" size={16} color="black" />
            </Pressable>
            <View>
                <Text className='text-lg font-bold'>twitteruser</Text>  
                <Text className='text-sm opacity-70'>@twitteruser</Text>
            </View>
            <View className='flex-row'>
                <View className='flex-row pr-2 gap-x-1'>
                    <Text className='font-semibold'>33</Text>
                    <Text className='opacity-70'>following</Text>
                </View>
                <View className='flex-row pr-2 gap-x-1'>
                    <Text className='font-semibold'>11</Text>
                    <Text className='opacity-70'>followers</Text>
                </View>
            </View>
            <View className='border-b border-black' />            
        </View>
        </>
    )
}