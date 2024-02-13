import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import type { FrontPageParamList } from "../../../types";
import Main, { mainOptions } from "../../Stacks/Main";
import TimelineSettings from "../../Stacks/TimelineSettings";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator<FrontPageParamList>()


export default function FrontPage() {
    const navigation = useNavigation()
    function toggleDrawer() {
        navigation.dispatch(DrawerActions.toggleDrawer())    
    }

    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Main" 
            options={mainOptions}            
            >
                {(props) => <Main {...props} toggleDrawer={toggleDrawer} />}
            </Stack.Screen>
            <Stack.Screen name="TimelineSettings" component={TimelineSettings} />
        </Stack.Navigator>
    )
}