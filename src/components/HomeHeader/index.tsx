import {
    Container,
    Logo,
    ContainerUser,
    User
} from './styles';

import logo from '@assets/logo.png';

const urlUser = 'http://github.com/dyksonn.png'

export function HomeHeader() {
    return (
        <Container>
            <Logo source={logo} resizeMode='contain' />

            <ContainerUser>
                <User 
                    source={{
                        uri: urlUser
                    }}
                    resizeMode='contain'
                />
            </ContainerUser>
        </Container>
    );
}