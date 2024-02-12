import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../../../types";

import Home from "../../BottomTabs/Home";
import Communities from "../../BottomTabs/Communities";
import Messages from "../../BottomTabs/Messages";
import Notifications from "../../BottomTabs/Notifications";
import Search from "../../BottomTabs/Search";


const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function Main() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={Home} options={{headerShown: false}} />
            <BottomTab.Screen name="Search" component={Search} />  
            <BottomTab.Screen name="Communities" component={Communities} />                
            <BottomTab.Screen name="Notifications" component={Notifications} />                
            <BottomTab.Screen name="Messages" component={Messages} />                
        </BottomTab.Navigator>
    )

}