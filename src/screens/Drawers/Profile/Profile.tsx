import { View, Text } from "react-native";

import ProfileBanner from "@components/ProfileBanner";
import ProfileTopTabs from "../../Tabs/ProfileTopTabs";

export default function Profile() {
    return (
        <View>
            <ProfileBanner />
            <View className="basis-1/2">
                <ProfileTopTabs />
            </View>
        </View>
    );
}
