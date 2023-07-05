import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;