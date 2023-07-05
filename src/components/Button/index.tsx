import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Container,
    Title
} from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    outline?: boolean;
    icon?: ReactNode
}


export function Button({
    title,
    outline = false,
    icon,
    ...rest
} : Props) {
    const Icon = icon;
    return (
        <Container {...rest}>
            {icon}
            <Title>{title}</Title>
        </Container>
    );
}