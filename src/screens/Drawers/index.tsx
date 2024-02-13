import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import type { RootParamList } from "../../types"

import FrontPage from "./FrontPage";

const Drawer = createDrawerNavigator<RootParamList>()

function DrawerContent() {
    return (
        <View className="w-full h-full bg-red-400 items-center justify-center">
            <Text>drawer content</Text>
        </View>
    )
}

export default function Drawers() {

    return (
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,            
        }}
        initialRouteName="FrontPage"
        drawerContent={DrawerContent}
        
        >
            <Drawer.Screen 
            name="FrontPage" 
            component={FrontPage}  
            />
        </Drawer.Navigator>
    )
}