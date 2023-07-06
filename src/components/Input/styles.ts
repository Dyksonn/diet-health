import styled from 'styled-components/native';

type PropsComponent =  {
    isMultiline?: boolean;
};

export const Container = styled.View`
    margin-bottom: 24px;
`;

export const Title = styled.Text`
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const InputArea = styled.TextInput<PropsComponent>`
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    height: ${({ isMultiline }) => isMultiline ? 100 : 50}px;
`;
