import { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
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
import { PopUp } from '@components/PopUp'
import { dietRemove } from '@storage/Diets/dietRemove'
import { transformDates } from '@utils/transformDatesPt'

type PropsRoute = {
    data: PropsDataFeed;
    section: string;
}

export function EditFeed() {
    const [visible, setVisible] = useState(false);
    const { data, section } = useRoute().params as PropsRoute;
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    async function handleExcluded() {
        await dietRemove(data, section);
        handleOpenOrCloseVisible();
        navigation.goBack();
    }

    const handleOpenOrCloseVisible = () => setVisible(prevState => !prevState);

    function handleNavEditFeed() {
        navigation.navigate('createFeed', {data, section});
    }

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
                <InfoData>{transformDates(data.date, 'date')} ás {transformDates(data.hour, 'time')}</InfoData>

                <ContainerIsDiet>
                    <ContainerBall isDiet={data.isDiet} />
                    <DietText>dentro da dieta</DietText>
                </ContainerIsDiet>

                <Footer>
                    <Button 
                        title="Editar refeição"
                        icon={<IconPincel />}
                        onPress={handleNavEditFeed}
                    />
                    <Button 
                        title="Excluir refeição"
                        icon={<IconTrash />}
                        outline
                        onPress={handleOpenOrCloseVisible}
                    />
                </Footer>

                <PopUp 
                    visible={visible}
                    onClose={handleOpenOrCloseVisible}
                    onExcluded={handleExcluded}
                />
            </Content>
        </Container>
   );
}