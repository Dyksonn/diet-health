import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

type PropsComponent = {
    bg?: string;
}

export const Container = styled(SafeAreaView)<PropsComponent>`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, bg }) => bg ?? theme.COLORS.GRAY_500};
    padding: 24px 24px 90px 24px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ButtonIcon = styled.TouchableOpacity`
    position: absolute;
    top: 69px;
    left: 24px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) =>({
    size: 24,
    weight: 'fill',
    color: theme.COLORS.GRAY_200
}))``;