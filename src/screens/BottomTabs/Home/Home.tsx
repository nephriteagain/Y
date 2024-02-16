import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Link } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { View, Text } from "react-native";
import HomeTopTabs from "@screens/Tabs/HomeTopTabs";



export default function Home() {

    const navigation = useNavigation()

    useFocusEffect(() => {
        const parentNav = navigation.getParent();
        if (!parentNav) return;
        parentNav.setOptions({
            headerTitle: () => (<View><Text className="font-bold text-2xl">Y</Text></View>),
            headerRight: () => (<Link to={{screen: 'TimelineSettings'}}><Feather name="settings" size={24} color="black" /></Link>),
            headerTitleAlign: 'center',
            

        })
    })

    return <HomeTopTabs />
    
}