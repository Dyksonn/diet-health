import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
    Container,
    Title,
    Icon,
} from './styles';
import { TouchableHighlight, SectionList } from 'react-native'

import { HomeHeader } from '@components/HomeHeader';
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { Diet, SectionDiet } from '@components/Diet';
import { dietsGetAll } from '@storage/Diets/dietsGetAll';

export function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [diets, setDiets] = useState<FeedsDiets[]>([]);
    const navigation = useNavigation();

    async function fetchFeeds() {
        try {
            setIsLoading(true);
            const data = await dietsGetAll();
            setDiets(data);
        } catch (error) {
            setIsLoading(false)
        } finally {
            setIsLoading(false);
        }
    }
    
    function handleOpenStatisticDiet() {
        navigation.navigate('statistic');
    }

    function handleCreateNewFeed() {
        navigation.navigate('createFeed');
    }

    useFocusEffect(useCallback(() => {
        fetchFeeds();
    }, []));

    return (
        <Container>
            <HomeHeader />
            <TouchableHighlight 
                underlayColor='transparent'
                onPress={handleOpenStatisticDiet}
            >
                <Percent 
                    dietHealthy 
                />
            </TouchableHighlight>

            <Title>Refeições</Title>
            <Button 
                title="Nova refeição"
                icon={<Icon />}
                onPress={handleCreateNewFeed}
            />
            
            <SectionList 
                sections={diets}
                keyExtractor={(item, index) => String(item.name + index)}
                renderItem={({ item, section: {daymonthyear} }) => (
                    <Diet data={item}
                        onPress={()=>navigation.navigate('editFeed', { data: item, section: daymonthyear })}
                    />
                )}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={({ section: { daymonthyear }}) => <SectionDiet section={daymonthyear}/>}
            />
        </Container>
    );
}