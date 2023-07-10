import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
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
import { dietCreate } from '@storage/Diets/dietsCreate';
import { AppError } from '@utils/AppError';
import { dietEdit } from '@storage/Diets/dietEdit';


type PropsRoute = {
    data: PropsDataFeed;
    section: string;
}

export function CreateFeed() {
    const routeParams = useRoute().params as PropsRoute;
    const edit = routeParams !== undefined ? true : false;
    const [visibleDate, setVisibleDate] = useState(false);
    const [visibleHour, setVisibleHour] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState<Date|null>(null);
    const [hour, setHour] = useState<Date|null>(null);
    const [isDiet, setIsDiet] = useState<number>(0)

    const navigation = useNavigation();

    function onConfirm(data: Date) {
        setDate(data);
        setVisibleDate(false);
    }

    function onConfirmHour(data: Date) {
        setHour(data)
        setVisibleHour(false);
    }

    function handleSelectIsDiet(value: number) {
        setIsDiet(prevState => prevState === value ? 0 : value);
    }

    async function handleCreateFeed() {
        try {
            const data = {
                name, 
                description,
                date: date,
                hour: hour,
                isDiet: isDiet === 1 ? true : false
            }

            if (edit) {
                await dietEdit(data, routeParams.section);
            } else {
                await dietCreate(data);
            }
            navigation.navigate('finishCreate', {
                isFailed: data.isDiet
            });
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Registrar refeição', error.message);
            } else {
                Alert.alert('Registrar refeição', 'Não foi possivel registrar nova refeição');
            }
        }
    }

    useEffect(() => {
        console.log(routeParams);
        if (routeParams !== undefined) {
            const { 
                name, 
                description, 
                date,
                hour,
                isDiet
            } = routeParams.data;

            setName(name);
            setDescription(description);
            setDate(new Date(String(date)));
            setHour(new Date(String(hour)));
            setIsDiet(isDiet ? 1 : 2);
        }
    }, [])

    return (
        <Container>
            <AppHeader title='Nova refeição' />
            <Content>
                <Input 
                    titleInput='Nome'
                    value={name}
                    onChangeText={setName}
                />

                <Input 
                    titleInput='Descrição'
                    isMultiline
                    value={description}
                    onChangeText={setDescription}
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
                    title={edit ? "Salvar alterações" : "Cadastrar refeição"}
                    onPress={handleCreateFeed}
                />
            </Content> 
        </Container>
    );
}