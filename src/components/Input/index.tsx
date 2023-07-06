import { useTheme } from 'styled-components';
import {
    Container, 
    Title,
    InputArea
} from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
    titleInput: string;
    isMultiline?: boolean;
}

export function Input({ titleInput, isMultiline = false, ...rest }:Props) {
    const theme = useTheme();
    return (
        <Container>
            <Title>{titleInput}</Title>
            <InputArea 
                {...rest}
                placeholderTextColor={theme.COLORS.GRAY_100}
                cursorColor={theme.COLORS.GRAY_100}
                isMultiline={isMultiline}
                multiline={isMultiline}
            />
        </Container>
    );
}