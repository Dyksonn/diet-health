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

const data = [
    {
        daymonthyear: '10.02.2023',
        data: [{
            name: 'Xtudo',
            description: 'tudoooo',
            date: '20-04-2023',
            hour: '10:15',
            isDiet: false
        }]
    }
]

export function Home() {
    const navigation = useNavigation();
    
    function handleOpenStatisticDiet() {
        navigation.navigate('statistic');
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
            />
            
            <SectionList 
                sections={data}
                keyExtractor={(item, index) => String(item.name + index)}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { daymonthyear }}) => <Text>{daymonthyear}</Text>}
            />
        </Container>
    );
}