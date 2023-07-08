import { useNavigation } from '@react-navigation/native';
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
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container bg={bg}>
            <ButtonIcon onPress={handleGoBack}>
                <Icon />
            </ButtonIcon>
            <Title>{title}</Title>
        </Container>
    );
}