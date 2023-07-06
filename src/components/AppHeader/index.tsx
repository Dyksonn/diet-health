import {
    Container,
    Title,
    ButtonIcon,
    Icon
} from './styles';

type Props = {
    title: string;
}

export function AppHeader({ title } : Props) {
    return (
        <Container>
            <ButtonIcon>
                <Icon />
            </ButtonIcon>
            <Title>{title}</Title>
        </Container>
    );
}