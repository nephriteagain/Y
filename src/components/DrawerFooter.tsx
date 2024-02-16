import { View, Text } from "react-native";
import { List } from "react-native-paper";

import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useGlobalStore } from "@hooks/useGlobalStore";

export default function DrawerFooter() {
    const theme = useGlobalStore((s) => s.theme);

    return (
        <View className="gap-y-4 px-4 mt-auto">
            <View className="border-t border-black pb-6" />
            <List.Section title="">
                <List.Accordion
                    title="Professional Tools"
                    titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                    style={{ backgroundColor: "white" }}
                >
                    <List.Item
                        title="Ads"
                        left={() => (
                            <FontAwesome6
                                name="arrow-up-right-from-square"
                                size={18}
                                color="black"
                            />
                        )}
                        titleStyle={{ fontSize: 14 }}
                        style={{ paddingStart: 16 }}
                    />
                </List.Accordion>

                <List.Accordion
                    title="Settings & Support"
                    titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                    style={{ backgroundColor: "white" }}
                >
                    <List.Item
                        title="Settings and privacy"
                        left={() => (
                            <Feather name="settings" size={24} color="black" />
                        )}
                        titleStyle={{ fontSize: 14 }}
                        style={{ paddingStart: 16 }}
                    />
                    <List.Item
                        title="Help Center"
                        left={() => (
                            <Ionicons
                                name="help-circle-outline"
                                size={24}
                                color="black"
                            />
                        )}
                        titleStyle={{ fontSize: 14 }}
                        style={{ paddingStart: 16 }}
                    />
                </List.Accordion>
            </List.Section>
            <View className="fixed bottom-1 left-4 w-full b-white z-10 ">
                {theme === "day" ? (
                    <Ionicons name="sunny-outline" size={32} color="black" />
                ) : (
                    <MaterialCommunityIcons
                        name="weather-night"
                        size={32}
                        color="black"
                    />
                )}
            </View>
        </View>
    );
}
