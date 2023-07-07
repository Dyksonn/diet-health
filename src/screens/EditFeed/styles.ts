import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled.View`
    flex: 1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-top: -140px;
    padding: 40px 24px;
`;