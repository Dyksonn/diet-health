import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const ContainerUser = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const User = styled.Image`
    flex: 1;
    border-radius: 20px;
`;