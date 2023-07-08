import {
    Container,
    Title,
    ButtonIcon,
    Icon
} from './styles';

type Props = {
    title: string;
    bg?: string;
}

export function AppHeader({ title, bg } : Props) {
    return (
        <Container bg={bg}>
            <ButtonIcon>
                <Icon />
            </ButtonIcon>
            <Title>{title}</Title>
        </Container>
    );
}