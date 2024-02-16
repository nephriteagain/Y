import { useNavigation } from "@react-navigation/native";
import { TextInput, ScrollView, Pressable, Text, View } from "react-native";
import { useFocusEffect, Link } from "@react-navigation/native";
import { faker } from "@faker-js/faker";
import { Feather } from "@expo/vector-icons";

import SearchResult from "@components/SearchResult";

const fakeSearchResult = Array.from({ length: 20 }, () => {
    const name = faker.person;
    return {
        id: faker.string.alphanumeric(5),
        displayName: name.fullName(),
        userName: name.firstName(),
    };
});

export default function Search() {
    const navigation = useNavigation();

    useFocusEffect(() => {
        const parentNav = navigation.getParent();
        if (!parentNav) return;
        parentNav.setOptions({
            headerTitle: () => (
                <TextInput
                    placeholder="Seach Y"
                    className="bg-gray-200 px-4 py-1 w-[75%] rounded-xl border border-gray-300"
                />
            ),
            headerRight: () => (
                <Link to={{ screen: "ExploreSettings" }}>
                    <Feather name="settings" size={24} color="black" />
                </Link>
            ),
            headerTitleAlign: "center",
        });
    });

    return (
        <View className="p-4">
            <ScrollView>
                {fakeSearchResult.map((s) => {
                    return <SearchResult key={s.id} {...s} />;
                })}
            </ScrollView>
        </View>
    );
}
