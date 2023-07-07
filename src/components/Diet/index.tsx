import {
    Container,
    ContainerHour,
    Hour,
    Divider,
    Title,
    IsDiet,
    SectionTitle
} from './styles'
import { TouchableOpacityProps } from 'react-native';

type PropsDiet = {
    name: string;
    description: string;
    date: Date;
    hour: Date;
    isDiet: boolean;
}

type Props = TouchableOpacityProps & {
    data: PropsDiet;
}

export function Diet({data, ...rest}:Props) {
    return (
        <Container {...rest}>
            <ContainerHour>
                <Hour>{data.hour.toLocaleTimeString('pt-br').slice(0, 5)}</Hour>

                <Divider />
            </ContainerHour>

            <Title>{data.name}</Title>

            <IsDiet isDiet={data.isDiet} />
        </Container>
    );
}

export function SectionDiet({ section }:{section: string}) {
    return <SectionTitle>{section}</SectionTitle>
}