import { FrontPageParamList } from "../../../types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import BottomTabs from "../../BottomTabs";
import { useGlobalStore } from "../../../hooks/useGlobalStore";
import { useEffect } from "react";
import { FontAwesome } from '@expo/vector-icons';



type MainProps = NativeStackScreenProps<FrontPageParamList> & {
    toggleDrawer() : void
}

export default function Main({toggleDrawer, navigation, route}: MainProps) {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <>
                <FontAwesome 
                name="user-circle-o" 
                size={32} color="black" 
                onPress={() => toggleDrawer()}
                />
                </>
            ),
        })
    }, [])


    return (
        <BottomTabs />
    )

}