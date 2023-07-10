import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { dietsGetAll } from './dietsGetAll';
import { DIETS_COLLECTION } from '@storage/storageConfig';

export async function dietCreate(newDiet: PropsDataFeed) {
  try {
    const storedDiets = await dietsGetAll();

    const dateNow = new Date().toLocaleDateString('pt-br').replaceAll('/', '.');

    let found = false;

    storedDiets.forEach(item => {
        if (item.daymonthyear === dateNow) {
            item.data.push(newDiet);
            found = true;
        }
    });

    if (!found) {
        storedDiets.push({
            daymonthyear: dateNow,
            data: [newDiet]
        })
    }

    const storage = JSON.stringify(storedDiets)
    await AsyncStorage.setItem(DIETS_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
};