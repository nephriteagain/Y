import { View, Text, Switch } from "react-native";

export default function ExploreSettingsItems({title, header, description}: {title:string; header:string; description:string}) {
    return (
        <View className="p-4 gap-y-4">
            <View>
                <Text className="font-bold" style={{fontSize: 20}}>
                    {title}
                </Text>
            </View>
            <View className="flex-row">
                <View className="basis-4/6">
                    <Text className="font-semibold" style={{fontSize: 16}}>{header}</Text>
                    <Text>{description}</Text>
                </View>
                <View className="basis-2/6">
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        // onValueChange={toggleSwitch}
                        // value={isEnabled}
                    />
                </View>
            </View>
        </View>
    )
}