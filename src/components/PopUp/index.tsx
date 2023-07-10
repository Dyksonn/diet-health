import {
    ModalContainer,
    Container,
    Popup,
    Title,
    ContainerButtonRow
} from './styles';

import { Button } from '@components/Button';

type Props = {
    onClose: () => void;
    onExcluded: () => void;
    visible: boolean;
}

export function PopUp({ visible, onClose, onExcluded }: Props) {
    return (
        <ModalContainer visible={visible}>
            <Container>
                <Popup>
                    <Title>
                        Deseja realmente excluir o registro da refeição?
                    </Title>

                    <ContainerButtonRow>
                        <Button 
                            title="Cancelar"
                            outline
                            onPress={onClose}
                        />

                        <Button 
                            title="Sim, excluir"
                            onPress={onExcluded}
                        />
                    </ContainerButtonRow>
                </Popup>
            </Container>
        </ModalContainer>
    );
}