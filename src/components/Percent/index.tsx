import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
    Container,
    PercentText,
    Description,
    IconTouch,
    Icon,
    IconHeader
} from './styles'
import { dietsStatistics } from '@storage/Diets/dietStatistics';

type Props = {
    isHeader?: boolean;
    goBack?: () => void;
}

export function Percent({ isHeader = false, goBack } : Props) {
    const [percentage, setPercentage] = useState('');
    const [isDiet, setIsDiet] = useState(false);

    useFocusEffect(useCallback(() => {
        getStatistics();
    }, []))

    async function getStatistics() {
        try {
            const { 
                percentageOfMealsInDiet,
                isDietPositive
             } = await dietsStatistics();

             setIsDiet(isDietPositive);
             setPercentage(percentageOfMealsInDiet);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container dietHealthy={isDiet} isHeader={isHeader}>
            <IconTouch 
                dietHealthy={isDiet} 
                isHeader={isHeader}
                onPress={goBack}
            >
                {
                    isHeader ? 
                        <IconHeader dietHealthy={isDiet} isHeader={isHeader} /> :
                        <Icon dietHealthy={isDiet} isHeader={isHeader} />
                }
            </IconTouch>
            
            <PercentText>{percentage}%</PercentText>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    );
}