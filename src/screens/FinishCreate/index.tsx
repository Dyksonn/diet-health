import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Container,
    Title,
    Description,
    ImageHero
} from './styles';

import { Button } from '@components/Button';

import success from '@assets/sucess.png';
import err from '@assets/err.png';

type PropsRoute = {
    isFailed: boolean;
}

export function FinishCreate() {
    const navigation = useNavigation();
    const { isFailed } = useRoute().params as PropsRoute;

    function handleNavigationHome() {
        navigation.reset({
            routes: [{ name: 'home' }]
        })
    }
    return (
        <Container>
            <Title isFailed={isFailed}>
                {!isFailed ? 'Continue Assim!' : 'Que pena!'}
            </Title>
            {
                !isFailed ? 
                    <Description>Você continua <Description bold>dentro da dieta</Description>. Muito bem!</Description>
                :
                    <Description>Você <Description bold>saiu da dieta</Description> dessa vez, mais continue se esforçando e não desista!</Description>
            }

            <ImageHero 
                source={!isFailed ? success : err}
                resizeMode='contain'
            />

            <Button 
                title='Ir para a página inicial'
                onPress={handleNavigationHome}
            />
        </Container>
    );
}