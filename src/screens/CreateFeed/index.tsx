import { Input } from '@components/Input';
import {
    Container,
    Content,
} from './styles';

import { AppHeader } from '@components/AppHeader';

export function CreateFeed() {
    return (
        <Container>
            <AppHeader title='Nova refeição' />
            <Content>
                <Input 
                    titleInput='Nome'
                />

                <Input 
                    titleInput='Descrição'
                    isMultiline
                />
            </Content> 
        </Container>
    );
}