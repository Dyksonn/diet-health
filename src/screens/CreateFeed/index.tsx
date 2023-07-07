import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Content,
    Row,
    TitleOptions,
    ButtonSelect,
    RowSelect,
    BallGreen,
    BallRed,
    Title
} from './styles';

import { AppHeader } from '@components/AppHeader';
import { Input } from '@components/Input';
import { DateHour } from '@components/DateHour';
import { Button } from '@components/Button';

export function CreateFeed() {
    const [visibleDate, setVisibleDate] = useState(false);
    const [visibleHour, setVisibleHour] = useState(false);
    const [date, setDate] = useState<Date|null>(null);
    const [hour, setHour] = useState<Date|null>(null);
    const [isDiet, setIsDiet] = useState<number>(0)

    const navigation = useNavigation();

    function onConfirm(data: Date) {
        setDate(data);
        setVisibleDate(false);
    }
    function onConfirmHour(data: Date) {
        console.log(data);
        setHour(data)
        setVisibleHour(false);
    }

    function handleSelectIsDiet(value: number) {
        setIsDiet(prevState => prevState === value ? 0 : value);
    }

    function handleCreateFeed() {
        navigation.navigate('finishCreate', {
            isFailed: isDiet === 2 ? true : false
        });
    }

    return (
        <Container>
            <AppHeader title='Nova refeição' />
            <Content>
                <Input 
                    titleInput='Nome'
                />

                <Input 
                    titleInput='Descrição'
                    isMultiline
                />

                <Row>
                    <DateHour 
                        title='Data'
                        isVisible={visibleDate}
                        mode="date"
                        isDate
                        date={date != null ? new Date(date) : new Date()}
                        onCancel={() => setVisibleDate(false)}
                        onConfirm={onConfirm}
                        onPress={() => setVisibleDate(true)}
                        value={date}
                    />

                    <DateHour 
                        title='Hora'
                        isVisible={visibleHour}
                        mode="time"
                        date={hour != null ? new Date(hour) : new Date()}
                        onCancel={() => setVisibleHour(false)}
                        onConfirm={onConfirmHour}
                        onPress={() => setVisibleHour(true)}
                        value={hour}
                    />
                </Row>

                <TitleOptions>Está dentro da dieta?</TitleOptions>
                <Row>
                    <ButtonSelect 
                        onPress={() => handleSelectIsDiet(1)}
                        isDiet={isDiet === 1 ? true : null}
                    >
                        <RowSelect>
                            <BallGreen />
                            <Title>Sim</Title>
                        </RowSelect>
                    </ButtonSelect>

                    <ButtonSelect 
                        onPress={() => handleSelectIsDiet(2)}
                        isDiet={isDiet === 2 ? false : null}
                    >
                        <RowSelect>
                            <BallRed />
                            <Title>Não</Title>
                        </RowSelect>
                    </ButtonSelect>
                </Row>

                <Button 
                    title="Cadastrar refeição"
                    onPress={handleCreateFeed}
                />
            </Content> 
        </Container>
    );
}