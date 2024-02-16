import { ScrollView } from "react-native";
import { Post } from "../../../../types";
import { faker } from "@faker-js/faker";

import SinglePost from "../../../../components/Post";
const fakePosts : Post[] = Array.from({length: 10}, () => ({
    id: faker.string.alphanumeric(5),
    displayName: faker.person.fullName(),
    userName: `@${faker.person.fullName()}`,
    date: `${faker.number.int({min:1, max:23})}h`,
    post: faker.lorem.paragraphs({min:1, max:5}),
    engagements: {
        reply: faker.number.int({min:0, max: 999}),
        retweet: faker.number.int({min:0, max: 999}),
        likes: faker.number.int({min:0, max: 999}),
        views: faker.number.int({min:1_000, max: 1_000_000_000})
    }
}))

export default function ProfilePosts() {
    return (
        <ScrollView>
            {fakePosts.map(p => {
                return <SinglePost key={p.id} {...p} />
            })}
        </ScrollView>
    )
}