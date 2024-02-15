import { Pressable, Text, View } from "react-native";
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerContentComponentProps
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import type { RootParamList } from "../../types"

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import DrawerHeader from "../../components/DrawerHeader";
import DrawerFooter from "../../components/DrawerFooter";

import FrontPage from "./FrontPage";
import Premium from "./Premium";
import Bookmarks from "./Bookmarks";
import Lists from "./Lists";
import Spaces from "./Spaces";
import Monetization from "./Monetization";

const Drawer = createDrawerNavigator<RootParamList>()

function DrawerContent(props:DrawerContentComponentProps) {        
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{}}>
            <DrawerHeader />
            <View className="mb-auto">
                <DrawerItemList {...props}/>
            </View>
            <DrawerFooter />
        </DrawerContentScrollView>
    )
}

export default function Drawers() {
    const nav = useNavigation()

    return (
        <Drawer.Navigator
        screenOptions={{
            drawerActiveBackgroundColor: 'white',
            drawerLabelStyle: {
                fontSize: 20,
                fontWeight: '900'
            },
            drawerActiveTintColor: 'black',
        }}
        initialRouteName="FrontPage"
        drawerContent={DrawerContent}                
        >
            <Drawer.Screen 
            name="FrontPage" 
            component={FrontPage}
            options={{
                headerShown: false,
                // this hides the frontpage from the navbar button
                drawerLabelStyle: {
                    width: 0,
                    height: 0
                },
                drawerItemStyle: {
                    width : 0,
                    height: 0
                }    
            }}
            />
            <Drawer.Screen
            name="Premium"
            component={Premium}
            options={{
                drawerIcon: () => <MaterialIcons name="workspace-premium" size={24} color="black" />,
                headerTitle: () => {
                    return (
                        <View className="flex-row items-center gap-x-6">
                            <Pressable onPress={() => nav.goBack()}>
                                <Ionicons name="arrow-back" size={32} color="black" />
                            </Pressable>
                            <Text className="font-bold" style={{fontSize: 18}}>Premium</Text>                        
                        </View>
                    )
                },
                headerLeft: () => <></> // this removes the hamburger icon

            }}
            />
            <Drawer.Screen
            name="Bookmarks"
            component={Bookmarks}
            options={{
                drawerIcon: () => <Feather name="bookmark" size={24} color="black" />,
                headerTitle: () => {
                    return (
                        <View className="flex-row items-center gap-x-6">
                            <Pressable onPress={() => nav.goBack()}>
                                <Ionicons name="arrow-back" size={32} color="black" />
                            </Pressable>
                            <Text className="font-bold" style={{fontSize: 18}}>Bookmarks</Text>                        
                        </View>
                    )
                },
                headerLeft: () => <></> // this removes the hamburger icon
            }}
            />
            <Drawer.Screen
            name="Lists"
            component={Lists}
            options={{
                drawerIcon: () => <FontAwesome5 name="list-alt" size={24} color="black" />,
                headerTitle: () => {
                    return (
                        <View className="flex-row items-center gap-x-6">
                            <Pressable onPress={() => nav.goBack()}>
                                <Ionicons name="arrow-back" size={32} color="black" />
                            </Pressable>
                            <Text className="font-bold" style={{fontSize: 18}}>Lists</Text>                        
                        </View>
                    )
                },
                headerLeft: () => <></> // this removes the hamburger icon
            }}
            />
            <Drawer.Screen
            name="Spaces"
            component={Spaces}
            options={{
                drawerIcon: () => <Fontisto name="mic" size={24} color="black" />,
                headerTitle: () => {
                    return (
                        <View className="flex-row items-center gap-x-6">
                            <Pressable onPress={() => nav.goBack()}>
                                <Ionicons name="arrow-back" size={32} color="black" />
                            </Pressable>
                            <Text className="font-bold" style={{fontSize: 18}}>Spaces</Text>                        
                        </View>
                    )
                },
                headerLeft: () => <></> // this removes the hamburger icon
            }}
            />
            <Drawer.Screen
            name="Monetization"
            component={Monetization}
            options={{
                drawerIcon: () => <MaterialIcons name="monetization-on" size={24} color="black" />,
                headerTitle: () => {
                    return (
                        <View className="flex-row items-center gap-x-6">
                            <Pressable onPress={() => nav.goBack()}>
                                <Ionicons name="arrow-back" size={32} color="black" />
                            </Pressable>
                            <Text className="font-bold" style={{fontSize: 18}}>Monetization</Text>                        
                        </View>
                    )
                },
                headerLeft: () => <></> // this removes the hamburger icon
            }}
            />
        </Drawer.Navigator>
    )
}