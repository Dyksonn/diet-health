import AsyncStorage from '@react-native-async-storage/async-storage';

import { DIETS_COLLECTION } from '@storage/storageConfig';

export async function dietsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DIETS_COLLECTION);

    const diets: FeedsDiets[] = storage ? JSON.parse(storage) : [];

    return diets;
  } catch (error) {
    throw error;
  }
}