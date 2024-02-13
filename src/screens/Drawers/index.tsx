import { Text, View } from "react-native";
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerContentComponentProps
} from "@react-navigation/drawer";
import type { RootParamList } from "../../types"
import { FontAwesome } from '@expo/vector-icons';


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
        <DrawerContentScrollView {...props} contentContainerStyle={{height: '100%',}}>
            <DrawerHeader />
            <View className="mb-auto">
                <DrawerItemList {...props}/>
            </View>
            <DrawerFooter />
        </DrawerContentScrollView>
    )
}

export default function Drawers() {

    return (
        <Drawer.Navigator
        screenOptions={{
            drawerActiveBackgroundColor: 'white',
            drawerLabelStyle: {
                fontSize: 20,
                fontWeight: '900'
            },
            drawerActiveTintColor: 'black'
        }}
        initialRouteName="FrontPage"
        drawerContent={DrawerContent}                
        >
            <Drawer.Screen 
            name="FrontPage" 
            component={FrontPage}        
            options={{
                headerShown: false,
            }}
            />
            <Drawer.Screen
            name="Premium"
            component={Premium}
            />
            <Drawer.Screen
            name="Bookmarks"
            component={Bookmarks}
            />
            <Drawer.Screen
            name="Lists"
            component={Lists}
            />
            <Drawer.Screen
            name="Spaces"
            component={Spaces}
            />
            <Drawer.Screen
            name="Monetization"
            component={Monetization}
            />
        </Drawer.Navigator>
    )
}