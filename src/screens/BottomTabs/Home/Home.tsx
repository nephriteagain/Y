import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeTopTabParamList } from "../../../types";
import ForYou from "../../Tabs/ForYou";
import Following from "../../Tabs/Following";

const TopTab = createMaterialTopTabNavigator<HomeTopTabParamList>()


export default function Home() {
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