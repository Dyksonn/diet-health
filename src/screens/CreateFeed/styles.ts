import styled, { css } from 'styled-components/native';

type PropsButtonSelect = {
    isDiet: boolean|null;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 90
    },
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-top: -105px;
    padding: 40px 24px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;  

export const TitleOptions = styled.Text`
    margin-top: 24px;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ButtonSelect = styled.TouchableOpacity<PropsButtonSelect>`
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 80px;

    ${({ theme, isDiet }) => {
        switch (isDiet) {
            case true:
                return css`
                    background-color: ${theme.COLORS.GREEN_100};
                    border-width: 1px;
                    border-color: ${theme.COLORS.GREEN_700};
                `
            case false:
                return css`
                    background-color: ${theme.COLORS.RED_LIGHT};
                    border-width: 1px;
                    border-color: ${theme.COLORS.RED_DARK};
                `
            default:
                return css`
                    background-color: ${theme.COLORS.GRAY_600};
                `
        }
    }}
    
`;

export const RowSelect = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
`;

export const BallGreen = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

export const BallRed = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;  