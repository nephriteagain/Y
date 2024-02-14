import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeTopTabParamList } from "../../../types";
import ForYou from "../../Tabs/ForYou";
import Following from "../../Tabs/Following";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Link } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { View, Text } from "react-native";


const TopTab = createMaterialTopTabNavigator<HomeTopTabParamList>()


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

    return (
        <TopTab.Navigator
        screenOptions={{
            tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 14,
            }
        }}
        >
            <TopTab.Screen 
            name="ForYou" 
            component={ForYou} 
            options={{
                tabBarLabel: 'For You'
            }} 
            />
            <TopTab.Screen 
            name="Following" 
            component={Following} 
            options={{
                tabBarLabel: 'Following'
            }} 
            />
        </TopTab.Navigator>
    )
}