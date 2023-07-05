import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: -55px;
  padding: 24px;
`;

export const Title = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: 48.4%;
`;