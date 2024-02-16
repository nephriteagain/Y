import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeTopTabParamList } from "@types";
const TopTab = createMaterialTopTabNavigator<HomeTopTabParamList>()

import ForYou from "./ForYou";
import Following from "./Following";

export default function HomeTopTabs() {
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