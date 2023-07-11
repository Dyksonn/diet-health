import AsyncStorage from '@react-native-async-storage/async-storage';

import { DIETS_COLLECTION } from '@storage/storageConfig';

export async function dietsStatistics() {
  try {
    const storage = await AsyncStorage.getItem(DIETS_COLLECTION);

    const diets: FeedsDiets[] = storage ? JSON.parse(storage) : [];

    const dietSuccessSum = diets.reduce((total, obj) => {
        const dietCount = obj.data.filter(item => item.isDiet).length;

        return total + dietCount;
    }, 0)

    const dietFailedSum = diets.reduce((total, obj) => {
        const dietCount = obj.data.filter(item => !item.isDiet).length;

        return total + dietCount;
    }, 0)

    const numberOfMealsOutDiet = diets.reduce((accumulator, mealGroup) => {
        const mealsOutDiet = mealGroup.data.reduce((accumulator, meal) => {
          if (!meal.isDiet) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);
    
        return accumulator + mealsOutDiet;
      }, 0);

    const totalFeedsDiet = diets.reduce((total, obj) => (total + obj.data.length), 0);
    

    const percentageOfMealsInDiet = (
        100 -
        (numberOfMealsOutDiet / totalFeedsDiet) * 100
      )
        .toFixed(2)
        .toString();

    const isDietPositive =
    parseFloat(percentageOfMealsInDiet) > 50 ? true : false;

    let currentSequence:FeedsDiets[] = [];
    let bestSequence:FeedsDiets[] = [];

    for (const obj of diets) {
        if (obj.data[0].isDiet) {
        currentSequence.push(obj);
        } else {
        if (currentSequence.length > bestSequence.length) {
            bestSequence = [...currentSequence];
        }
        currentSequence = [];
        }
    }

    if (currentSequence.length > bestSequence.length) {
        bestSequence = [...currentSequence];
    }

    return {
        dietSuccessSum,
        dietFailedSum,
        totalFeedsDiet,
        bestSequence,
        percentageOfMealsInDiet,
        isDietPositive
    }; 
  } catch (error) {
    throw error;
  }
}