import { View, ScrollView } from "react-native"
import { faker } from "@faker-js/faker";
import Notification from "@components/Notification";

const fakeNotifications = Array.from({length:10}, () => ({
    id: faker.string.alphanumeric(5),
    displayName: faker.person.firstName(),
    message: faker.lorem.sentence({min:3, max:20}),
}))

export default function All() {
    return (
        <ScrollView>
            {fakeNotifications.map(n => (
                <Notification key={n.id} {...n} />
            ))}
        </ScrollView>
    )
}