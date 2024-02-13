import { FrontPageParamList } from "../../../types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import BottomTabs from "../../BottomTabs";


type MainProps = NativeStackScreenProps<FrontPageParamList>

export default function Main({}: MainProps) {

    return (
        <BottomTabs />
    )

}