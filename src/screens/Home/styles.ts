import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';
import { Plus } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const Title = styled.Text`
    margin-top: 40px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(Plus).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  weight: 'fill'
}))``