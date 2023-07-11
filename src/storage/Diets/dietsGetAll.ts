import AsyncStorage from '@react-native-async-storage/async-storage';

import { DIETS_COLLECTION } from '@storage/storageConfig';

export async function dietsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DIETS_COLLECTION);

    const diets: FeedsDiets[] = storage ? JSON.parse(storage) : [];

    const dietsSortActualy = diets.sort((a, b) => {
      const dateA = new Date(a.daymonthyear.split('.').reverse().join('-'));
      const dateB = new Date(b.daymonthyear.split('.').reverse().join('-'));
      return dateB.getTime() - dateA.getTime();
    });

    return dietsSortActualy; 
  } catch (error) {
    throw error;
  }
}