import { transformDates } from '@utils/transformDatesPt';
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

type Props = TouchableOpacityProps & {
    data: PropsDataFeed;
}

export function Diet({data, ...rest}:Props) {
    return (
        <Container {...rest}>
            <ContainerHour>
                <Hour>{transformDates(data.hour, 'time')}</Hour>

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