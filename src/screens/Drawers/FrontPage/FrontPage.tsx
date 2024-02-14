import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import type { FrontPageParamList } from "../../../types";
import Main from "../../Stacks/Main";
import TimelineSettings from "../../Stacks/TimelineSettings";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator<FrontPageParamList>()


export default function FrontPage() {
    const navigation = useNavigation()
    function toggleDrawer() {
        navigation.dispatch(DrawerActions.toggleDrawer())    
    }

    return (
        <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
            <Stack.Screen 
            name="Main" 
            options={{
                headerLeft: () => (<FontAwesome name="user-circle-o" size={32} color="black" />),
                headerShadowVisible: false    
            }}                      
            >
                {(props) => <Main {...props} toggleDrawer={toggleDrawer} />}
            </Stack.Screen>
            <Stack.Screen name="TimelineSettings" component={TimelineSettings} />
        </Stack.Navigator>
    )
}