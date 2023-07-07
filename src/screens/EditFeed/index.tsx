import { useRoute } from '@react-navigation/native'
import { AppHeader } from '@components/AppHeader'
import {
    Container,
    Content
} from './styles'

type PropsRoute = {
    data: {
        name: string;
        description: string;
        date: Date;
        hour: Date;
        isDiet: boolean;
      }
}

export function EditFeed() {
    const { data } = useRoute().params as PropsRoute;
   return (
        <Container>
            <AppHeader 
                title='Refeição'
            />
            <Content>

            </Content>
        </Container>
   );
}