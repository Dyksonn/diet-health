import styled from 'styled-components/native';
import DateTimePickerModal, { DateTimePickerProps } from 'react-native-modal-datetime-picker';

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const DatePicker = styled(DateTimePickerModal)``;

export const Highlight = styled.TouchableOpacity`
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 14px;
    height: 50px;
`;

export const ValuePicker = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;