import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Percent } from '@components/Percent';
import { 
    Container, 
    Content, 
    Title,
    Row
} from './styles';

import { BlocCount } from '@components/BlocCount';
import { useTheme } from 'styled-components';
import { dietsStatistics } from '@storage/Diets/dietStatistics';

export function Statistic() {
    const [green, setGreen] = useState(0);
    const [red, setRed] = useState(0);
    const [total, setTotal] = useState(0);
    const [sequence, setSequence] = useState(0);

    const navigation = useNavigation();
    const theme = useTheme();

    function handleGoBack() {
        navigation.goBack();
    }

    useFocusEffect(useCallback(() => {
        getStatistics();
    }, []))

    async function getStatistics() {
        try {
            const { 
                totalFeedsDiet,
                dietSuccessSum,
                dietFailedSum,
                bestSequence
             } = await dietsStatistics();

             setGreen(dietSuccessSum);
             setRed(dietFailedSum);
             setTotal(totalFeedsDiet);
             setSequence(bestSequence.length);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Container>
            <Percent 
                isHeader 
                goBack={handleGoBack}
            />

            <Content>
                <Title>Estatísticas gerais</Title>

                <BlocCount 
                    count={sequence}
                    desc='melhor sequência de pratos dentro da dieta'
                />

                <BlocCount 
                    count={total}
                    desc='refeições registradas'
                />

                <Row>
                    <BlocCount 
                        count={green}
                        desc='refeições dentro da dieta'
                        bg={theme.COLORS.GREEN_100}
                    />

                    <BlocCount 
                        count={red}
                        desc='refeições fora da dieta'
                        bg={theme.COLORS.RED_LIGHT}
                    />
                </Row>
            </Content>
        </Container>
    );
}