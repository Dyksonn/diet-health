import styled from 'styled-components/native';

type PropsComponent = {
    bg?: string;
}

export const Container = styled.View<PropsComponent>`
    width: 100%;
    padding: 24px;
    background-color: ${({ theme, bg }) => bg ?? theme.COLORS.GRAY_600};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 12px;
    margin-bottom: 12px;
`;

export const Count = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-align: center;
`;