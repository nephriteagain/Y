import { Pressable, Text, View, TextInput } from "react-native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import type { RootParamList } from "@types";

import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import DrawerHeader from "@components/DrawerHeader";
import DrawerFooter from "@components/DrawerFooter";

import FrontPage from "./FrontPage";
import Profile from "./Profile";
import Premium from "./Premium";
import Bookmarks from "./Bookmarks";
import Lists from "./Lists";
import Spaces from "./Spaces";
import Monetization from "./Monetization";

const Drawer = createDrawerNavigator<RootParamList>();

function DrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{}}>
            <DrawerHeader />
            <View className="mb-auto">
                <DrawerItemList {...props} />
            </View>
            <DrawerFooter />
        </DrawerContentScrollView>
    );
}

export default function Drawers() {
    const nav = useNavigation();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: "white",
                drawerLabelStyle: {
                    fontSize: 20,
                    fontWeight: "900",
                },
                drawerActiveTintColor: "black",
            }}
            initialRouteName="FrontPage"
            drawerContent={DrawerContent}
        >
            <Drawer.Screen
                name="FrontPage"
                component={FrontPage}
                options={{
                    headerShown: false,
                    // this hides the frontpage from the navbar button
                    drawerLabelStyle: {
                        width: 0,
                        height: 0,
                    },
                    drawerItemStyle: {
                        width: 0,
                        height: 0,
                    },
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: () => (
                        <FontAwesome6 name="user" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Premium"
                component={Premium}
                options={{
                    drawerIcon: () => (
                        <MaterialIcons
                            name="workspace-premium"
                            size={24}
                            color="black"
                        />
                    ),
                    headerTitle: () => {
                        return (
                            <View className="flex-row items-center gap-x-6">
                                <Pressable onPress={() => nav.goBack()}>
                                    <Ionicons
                                        name="arrow-back"
                                        size={32}
                                        color="black"
                                    />
                                </Pressable>
                                <Text
                                    className="font-bold"
                                    style={{ fontSize: 18 }}
                                >
                                    Subscribe
                                </Text>
                            </View>
                        );
                    },
                    headerLeft: () => <></>, // this removes the hamburger icon
                }}
            />
            <Drawer.Screen
                name="Bookmarks"
                component={Bookmarks}
                options={{
                    drawerIcon: () => (
                        <Feather name="bookmark" size={24} color="black" />
                    ),
                    headerTitle: () => {
                        return (
                            <View className="flex-row items-center gap-x-6">
                                <Pressable onPress={() => nav.goBack()}>
                                    <Ionicons
                                        name="arrow-back"
                                        size={32}
                                        color="black"
                                    />
                                </Pressable>
                                <Text
                                    className="font-bold"
                                    style={{ fontSize: 18 }}
                                >
                                    Bookmarks
                                </Text>
                            </View>
                        );
                    },
                    headerLeft: () => <></>, // this removes the hamburger icon
                }}
            />
            <Drawer.Screen
                name="Lists"
                component={Lists}
                options={{
                    drawerIcon: () => (
                        <FontAwesome5 name="list-alt" size={24} color="black" />
                    ),
                    headerTitle: () => {
                        return (
                            <View className="flex-row items-center gap-x-4">
                                <Pressable onPress={() => nav.goBack()}>
                                    <Ionicons
                                        name="arrow-back"
                                        size={32}
                                        color="black"
                                    />
                                </Pressable>
                                <TextInput
                                    placeholder="Search for Lists"
                                    className="bg-gray-100 px-4 py-1 rounded-lg"
                                    style={{ width: 250 }}
                                />
                            </View>
                        );
                    },
                    headerLeft: () => <></>, // this removes the hamburger icon
                }}
            />
            <Drawer.Screen
                name="Spaces"
                component={Spaces}
                options={{
                    drawerIcon: () => (
                        <Fontisto name="mic" size={24} color="black" />
                    ),
                    headerTitle: () => {
                        return (
                            <View className="flex-row items-center gap-x-4">
                                <Text
                                    className="font-bold"
                                    style={{ fontSize: 18 }}
                                >
                                    Spaces
                                </Text>
                            </View>
                        );
                    },
                    headerLeft: () => (
                        <Pressable
                            onPress={() =>
                                nav.dispatch(DrawerActions.toggleDrawer())
                            }
                            className="px-4"
                        >
                            <FontAwesome
                                name="user-circle-o"
                                size={32}
                                color="black"
                            />
                        </Pressable>
                    ),
                }}
            />
            <Drawer.Screen
                name="Monetization"
                component={Monetization}
                options={{
                    drawerIcon: () => (
                        <MaterialIcons
                            name="monetization-on"
                            size={24}
                            color="black"
                        />
                    ),
                    headerTitle: () => {
                        return (
                            <View className="flex-row items-center gap-x-6">
                                <Pressable onPress={() => nav.goBack()}>
                                    <Ionicons
                                        name="arrow-back"
                                        size={32}
                                        color="black"
                                    />
                                </Pressable>
                                <View>
                                    <Text
                                        className="font-bold"
                                        style={{ fontSize: 18 }}
                                    >
                                        Monetization
                                    </Text>
                                    <Text
                                        className="font-semibold"
                                        style={{ color: "gray" }}
                                    >
                                        @yuser
                                    </Text>
                                </View>
                            </View>
                        );
                    },
                    headerLeft: () => <></>, // this removes the hamburger icon,
                    headerRight: () => (
                        <Pressable className="px-2">
                            <Feather name="info" size={28} color="black" />
                        </Pressable>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
