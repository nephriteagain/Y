import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import type { ProfileTopTabParamList } from '../../../types'


import ProfileHighlights from "./Highlights/ProfileHighlights";
import ProfileReplies from "./Replies/ProfileReplies";
import ProfilePosts from "./Posts/ProfilePosts";
import ProfileMedia from "./Media/ProfileMedia";

const TopTab = createMaterialTopTabNavigator<ProfileTopTabParamList>()


export default function ProfileTopTabs() {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 10, 
                },
            }}
            >
            <TopTab.Screen name="Posts" component={ProfilePosts} />
            <TopTab.Screen name="Replies" component={ProfileReplies} />
            <TopTab.Screen name="Highlights" component={ProfileHighlights} />
            <TopTab.Screen name="Media" component={ProfileMedia} />
        </TopTab.Navigator>
    )
}
