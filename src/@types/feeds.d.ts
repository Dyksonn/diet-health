declare interface PropsDataFeed {
    name: string;
    description: string;
    date: Date | null;
    hour: Date | null;
    isDiet: boolean;
}

declare interface FeedsDiets {
    daymonthyear: string;
    data: PropsDataFeed[];
}
