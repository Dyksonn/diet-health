import styled from 'styled-components/native';

type PropsComponent = {
    isDiet: boolean;
}

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    border-width: 1px;
    gap: 12px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 14px;
    margin-bottom: 8px;
`;

export const ContainerHour = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const Hour = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const IsDiet = styled.View<PropsComponent>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_500 : theme.COLORS.RED_MID};
`;

export const SectionTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    margin-bottom: 8px;
    margin-top: 32px;
`;