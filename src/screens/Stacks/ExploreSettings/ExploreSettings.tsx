import { Text, View } from "react-native";
import ExploreSettingsItems from "@components/ExploreSettingsItem";
import { faker } from "@faker-js/faker";

const settings = [
    {
        id: faker.string.alphanumeric(5),
        title: "Location",
        header: "Show content in this location",
        description:
            "When this is on, you'll see what's happening around you right now",
    },
    {
        id: faker.string.alphanumeric(5),
        title: "Personalization",
        header: "Trends for you",
        description:
            "You can personalize the trends for you bases on your location and who you follow",
    },
];

export default function ExploreSettings() {
    return (
        <View>
            <View>
                {settings.map((s) => (
                    <ExploreSettingsItems key={s.id} {...s} />
                ))}
            </View>
        </View>
    );
}
