import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FrontPageParamList } from "../../../types";
import Main, { mainOptions } from "../../Stacks/Main";
import TimelineSettings from "../../Stacks/TimelineSettings";

const Stack = createNativeStackNavigator<FrontPageParamList>()


export default function FrontPage() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={mainOptions} />
            <Stack.Screen name="TimelineSettings" component={TimelineSettings} />
        </Stack.Navigator>
    )
}