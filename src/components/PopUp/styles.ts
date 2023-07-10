import styled from 'styled-components/native';

export const ModalContainer = styled.Modal.attrs({
    transparent: true
})`
    flex: 1;
    
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Popup = styled.View`
    padding: 40px 21px 24px 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    gap: 32px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: center;
`;

export const ContainerButtonRow = styled.View`
    flex-direction: row;
    justify-content: center;
    gap: 12px
`;