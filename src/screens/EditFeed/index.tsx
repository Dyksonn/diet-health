import { useRoute } from '@react-navigation/native'
import { AppHeader } from '@components/AppHeader'
import {
    Container,
    Content,
    Title,
    Description,
    Date,
    InfoData,
    ContainerIsDiet,
    ContainerBall,
    DietText,
    Footer,
    IconPincel,
    IconTrash
} from './styles'
import { useTheme } from 'styled-components'

import { Button } from '@components/Button'

type PropsRoute = {
    data: {
        name: string;
        description: string;
        date: Date;
        hour: Date;
        isDiet: boolean;
      }
}

export function EditFeed() {
    const { data } = useRoute().params as PropsRoute;
    const { COLORS } = useTheme();

    const date = data.date.toLocaleDateString('pt-br');
    const hour = data.hour.toLocaleTimeString('pt-br').slice(0, 5);

   return (
        <Container>
            <AppHeader 
                title='Refeição'
                bg={data.isDiet ? COLORS.GREEN_100 : COLORS.RED_LIGHT}
            />
            <Content>
                <Title>{data.name}</Title>
                <Description>{data.description}</Description>

                <Date>Data e hora</Date>
                <InfoData>{date} ás {hour}</InfoData>

                <ContainerIsDiet>
                    <ContainerBall isDiet={data.isDiet} />
                    <DietText>dentro da dieta</DietText>
                </ContainerIsDiet>

                <Footer>
                    <Button 
                        title="Editar refeição"
                        icon={<IconPincel />}
                    />
                    <Button 
                        title="Excluir refeição"
                        icon={<IconTrash />}
                        outline
                    />
                </Footer>
            </Content>
        </Container>
   );
}