
export type FrontPageParamList = {
    Main: undefined;
    TimelineSettings: undefined;
    ExploreSettings: undefined;
    NotificationSettings: undefined;
    MessagesSettings: undefined;
}

export type HomeTopTabParamList = {
    ForYou: undefined;
    Following: undefined;
}

export type NotificationsTopTabParamList = {
    All: undefined;
    Verified: undefined;
    Mentions: undefined;
}

export type BottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Communities: undefined;
    Notifications: undefined;
    Messages: undefined;
}

export type RootParamList = {
    FrontPage: undefined;
    Premium: undefined;
    Bookmarks: undefined;
    Lists: undefined;
    Spaces: undefined;
    Monetization: undefined;
}

/**@description incomplete */
export type Post = {
    id: string
    displayName: string;
    userName: string;
    date: string; // fix this in the faker
    post: string;
    engagements: {
        reply: number;
        retweet: number;
        likes: number;
        views: number;
    }
}