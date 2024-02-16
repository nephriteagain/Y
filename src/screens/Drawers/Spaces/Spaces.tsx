import { View, Text, ScrollView } from "react-native"
import { faker } from "@faker-js/faker"
import Space from "@components/Space"

const fakeSpaces = Array.from({length:10}, () => {
    return {
        id: faker.string.alphanumeric(5),
        title: faker.lorem.words({min:4, max:10}),
        categories: Array.from({length:faker.number.int({min:2,max:6})}, () => faker.lorem.word()),
        currentListeners: faker.number.int({min:0, max:999}),
        host: faker.person.firstName(),
        hostDescription: faker.person.bio()
    }
})

export default function Spaces() {
    return (
        <View className="p-4">
            <View className="pt-8 pb-4">
                <Text className="font-bold" style={{fontSize:24}}>
                    Happening Now
                </Text>
                <Text className="font-semibold" style={{fontSize:16, color: 'gray'}}>
                    Spaces going on right now
                </Text>
            </View>    
            <ScrollView>
                    {fakeSpaces.map(s => {
                        return <Space key={s.id} {...s} />
                    })}
            </ScrollView>
        </View>
    )
}