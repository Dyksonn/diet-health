import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type PropsComponent = {
    isFailed?: boolean;
    bold?: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text<PropsComponent>`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 8px;
    text-align: center;
    color: ${({ theme, isFailed }) => isFailed ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_700};
`;

export const Description = styled.Text<PropsComponent>`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme, bold }) => bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 40px;
`;

export const ImageHero = styled.Image`
    margin-bottom: 32px;
`;