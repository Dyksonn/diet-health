import DateTimePickerModal, { DateTimePickerProps } from 'react-native-modal-datetime-picker';
import {
    Container,
    Title,
    Highlight,
    DatePicker,
    ValuePicker
} from './styles';

type Props = DateTimePickerProps & {
    isVisible: boolean;
    title: string;
    onPress: () => void;
    value: Date | null;
    isDate?: boolean;
}

export function DateHour({ title, isDate = false, onPress, value, ...rest }:Props) {
    const formatt = isDate ? value?.toLocaleDateString('pt-br') : value?.toLocaleTimeString('pt-br').slice(0, 5)
    return (
        <Container>
            <Title>{title}</Title>

            <Highlight onPress={onPress}>
                <ValuePicker>{value !== null ? formatt : ''}</ValuePicker>
                <DatePicker 
                    {...rest}
                    locale='pt_br'
                />
            </Highlight>
        </Container>
    );
}