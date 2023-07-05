import styled, { css } from 'styled-components/native';
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";

type PropsComponent = {
    dietHealthy: boolean;
    isHeader: boolean;
}

export const Container = styled.View<PropsComponent>`
    ${({ isHeader, dietHealthy, theme }) => {
        if (isHeader) {
            return css`
                width: 100%;
                padding: 20px 16px; 
                background-color: ${dietHealthy ? theme.COLORS.GREEN_100 : theme.COLORS.RED_LIGHT};
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                padding-top: 80px;
                padding-bottom: 90px;
            `;
        } else {
            return css`
                width: 100%;
                padding: 20px 16px; 
                background-color: ${dietHealthy ? theme.COLORS.GREEN_100 : theme.COLORS.RED_LIGHT};
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                margin-top: 36px;
            `
        }
    }};
`;

export const PercentText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const IconTouch = styled.TouchableOpacity<PropsComponent>`
    ${({ isHeader }) => {
        if (isHeader) {
            return css`
                position: absolute;
                top: 55px;
                left: 24px;
            `;
        } else {
            return css`
                position: absolute;
                top: 8px;
                right: 8px;
            `;
        }
    }};
`;

export const Icon = styled(ArrowUpRight).attrs<PropsComponent>(({ theme, dietHealthy }) => ({
    size: 24,
    color: dietHealthy ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
    weight: 'fill'
}))<PropsComponent>``;

export const IconHeader = styled(ArrowLeft).attrs<PropsComponent>(({ theme, dietHealthy }) => ({
    size: 24,
    color: dietHealthy ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
    weight: 'fill'
}))<PropsComponent>``;