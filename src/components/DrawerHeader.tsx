import { View, Text, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function DrawerHeader() {

    return (
        <View className='relative gap-y-2 px-4'>
            <FontAwesome name="user-circle-o" size={32} color="black" />
            <View className='absolute top-2 right-2'>
                <Entypo name="dots-three-vertical" size={16} color="black" />
            </View>
            <View>
                <Text className='text-lg font-bold'>nephriteagain</Text>  
                <Text className='text-sm opacity-70'>@nephriteagain</Text>
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
    )
}