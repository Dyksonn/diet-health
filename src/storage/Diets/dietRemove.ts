import AsyncStorage from '@react-native-async-storage/async-storage';

import { DIETS_COLLECTION } from '@storage/storageConfig';

import { dietsGetAll } from './dietsGetAll';

export async function dietRemove(feedDeleted: PropsDataFeed, section: string) {
  try {
    const storedFeeds = await dietsGetAll();
    
    const findBySection = storedFeeds.find(item => item.daymonthyear === section);

    if (findBySection) {
        const filteredFeeds = findBySection.data.filter(feed => feed.date !== feedDeleted.date)
        findBySection.data = filteredFeeds;

        const updateStorage = storedFeeds.filter(item => item.daymonthyear !== section);

        const store = filteredFeeds.length === 0 ? updateStorage : storedFeeds;

        await AsyncStorage.setItem(DIETS_COLLECTION, JSON.stringify(store));
    }
  } catch (error) {
    throw error;
  }
}