import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Title,
    Icon,
} from './styles';
import { TouchableHighlight, View, SectionList, Text } from 'react-native'

import { HomeHeader } from '@components/HomeHeader';
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { Diet, SectionDiet } from '@components/Diet';

const data = [
    {
        daymonthyear: '10.02.2023',
        data: [{
            name: 'Xtudo',
            description: 'tudoooo',
            date: new Date(),
            hour: new Date(),
            isDiet: false
        },
        {
            name: 'Sanduiche',
            description: 'taca',
            date: new Date(),
            hour: new Date(),
            isDiet: false
        }]
    },
    {
        daymonthyear: '09.02.2023',
        data: [{
            name: 'Xtudo',
            description: 'tudoooo',
            date: new Date(),
            hour: new Date(),
            isDiet: false
        }]
    }
]

export function Home() {
    const navigation = useNavigation();
    
    function handleOpenStatisticDiet() {
        navigation.navigate('statistic');
    }

    function handleCreateNewFeed() {
        navigation.navigate('createFeed');
    }

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
                sections={data}
                keyExtractor={(item, index) => String(item.name + index)}
                renderItem={({ item }) => (
                    <Diet data={item} 
                        onPress={()=>navigation.navigate('editFeed', { data: item })}
                    />
                )}
                renderSectionHeader={({ section: { daymonthyear }}) => <SectionDiet section={daymonthyear}/>}
            />
        </Container>
    );
}