import { useNavigation } from '@react-navigation/native';
import { Percent } from '@components/Percent';
import { 
    Container, 
    Content, 
    Title,
    Row
} from './styles';

import { BlocCount } from '@components/BlocCount';
import { useTheme } from 'styled-components';

export function Statistic() {
    const navigation = useNavigation();
    const theme = useTheme();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Percent 
                dietHealthy 
                isHeader 
                goBack={handleGoBack}
            />

            <Content>
                <Title>Estatísticas gerais</Title>

                <BlocCount 
                    count={4}
                    desc='melhor sequência de pratos dentro da dieta'
                />

                <BlocCount 
                    count={109}
                    desc='refeições registradas'
                />

                <Row>
                    <BlocCount 
                        count={32}
                        desc='refeições dentro da dieta'
                        bg={theme.COLORS.GREEN_100}
                    />

                    <BlocCount 
                        count={77}
                        desc='refeições fora da dieta'
                        bg={theme.COLORS.RED_LIGHT}
                    />
                </Row>
            </Content>
        </Container>
    );
}