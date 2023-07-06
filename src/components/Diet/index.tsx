import {
    Container,
    ContainerHour,
    Hour,
    Divider,
    Title,
    IsDiet,
    SectionTitle
} from './styles'

type Props = {
    hour: string;
    title: string;
}

export function Diet({hour, title}:Props) {
    return (
        <Container>
            <ContainerHour>
                <Hour>{hour}</Hour>

                <Divider />
            </ContainerHour>

            <Title>{title}</Title>

            <IsDiet />
        </Container>
    );
}

export function SectionDiet({ section }:{section: string}) {
    return <SectionTitle>{section}</SectionTitle>
}