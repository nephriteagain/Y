import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator()

export default function ProfileSettings() {
    return (
        <Drawer.Navigator>
               <Drawer.Screen name="profile" component={() => (<View><Text>profile</Text></View>)} />
        </Drawer.Navigator>
    )
}