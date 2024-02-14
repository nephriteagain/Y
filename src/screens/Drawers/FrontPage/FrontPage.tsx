import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import type { FrontPageParamList } from "../../../types";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

import Main from "../../Stacks/Main";
import TimelineSettings from "../../Stacks/TimelineSettings";
import ExploreSettings from "../../Stacks/ExploreSettings";
import NotificationSettings from "../../Stacks/NotificationSettings";
import MessagesSettings from "../../Stacks/MessagesSettings";

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
            <Stack.Screen 
            name="TimelineSettings" 
            component={TimelineSettings} 
            options={{title: 'Timeline Settings'}} 
            />
            <Stack.Screen 
            name="ExploreSettings" 
            component={ExploreSettings} 
            options={{
                headerTitle: () => (
                    <View>
                        <Text className="text-lg font-bold">Explore Settings</Text>
                        <Text className="text-sm opacity-70" >@nephriteagain</Text>
                    </View>
                )
            }}
            
            />
            <Stack.Screen 
            name="NotificationSettings" 
            component={NotificationSettings} 
            options={{
                headerTitle: () => (
                    <View>
                        <Text className="text-lg font-bold">Notifications</Text>
                        <Text className="text-sm opacity-70" >@nephriteagain</Text>
                    </View>
                )
            }}
            />
            <Stack.Screen 
            name="MessagesSettings" 
            component={MessagesSettings} 
            options={{
                headerTitle: () => (
                    <View>
                        <Text className="text-lg font-bold">Messages settings</Text>
                        <Text className="text-sm opacity-70" >@nephriteagain</Text>
                    </View>
                )
            }}
            />
        </Stack.Navigator>
    )
}