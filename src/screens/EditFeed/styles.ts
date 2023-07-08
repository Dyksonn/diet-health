import styled from 'styled-components/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled.View`
    flex: 1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-top: -105px;
    padding: 40px 24px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 8px;
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 24px;
`;

export const Date = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 8px;
`;

export const InfoData = styled.Text`
     color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 24px;
`;

export const ContainerIsDiet = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 1000px;
    width: 45%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ContainerBall = styled.View<{isDiet: boolean}>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const DietText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Footer = styled.View`
    width: 100%;
    position: absolute;
    bottom: 60px;
    align-self: center;
    flex-direction: column;
    gap: 12px;
`;

export const IconPincel = styled(PencilSimpleLine).attrs(({ theme }) => ({
    size: 18,
    weight: 'fill',
    color: theme.COLORS.WHITE
}))``;

export const IconTrash = styled(Trash).attrs(({ theme }) => ({
    size: 18,
    weight: 'fill',
    color: theme.COLORS.GRAY_100
}))``;