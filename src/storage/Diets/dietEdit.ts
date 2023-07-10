import AsyncStorage from '@react-native-async-storage/async-storage';

import { DIETS_COLLECTION } from '@storage/storageConfig';

import { dietsGetAll } from './dietsGetAll';

export async function dietEdit(feedEdit: PropsDataFeed, section: string) {
    try {
        const storedFeeds = await dietsGetAll();

        const findBySection = storedFeeds.find(item => item.daymonthyear === section);
        
        if (findBySection) {
            const feed = findBySection.data.find(item => JSON.stringify(item.date) === JSON.stringify(feedEdit.date));

            if (feed) {
                (feed.name = feedEdit.name),
                (feed.description = feedEdit.description),
                (feed.date = feedEdit.date),
                (feed.hour = feedEdit.hour),
                (feed.isDiet = feedEdit.isDiet)
            }
        }

        await AsyncStorage.setItem(DIETS_COLLECTION, JSON.stringify(storedFeeds));
    } catch (error) {
        throw error;
    }
}