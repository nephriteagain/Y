import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeTopTabParamList } from "../../../types";
import ForYou from "../../Tabs/ForYou";
import Following from "../../Tabs/Following";

const TopTab = createMaterialTopTabNavigator<HomeTopTabParamList>()


export default function Home() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="ForYou" component={ForYou} />
            <TopTab.Screen name="Following" component={Following} />
        </TopTab.Navigator>
    )
}