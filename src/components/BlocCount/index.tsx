import {
    Container,
    Count,
    Description
} from './styles';

type Props = {
    count: number;
    desc: string;
    bg?: string;
}

export function BlocCount({ count, desc, bg }:Props) {
    return (
        <Container bg={bg}>
            <Count>
                {count}
            </Count>

            <Description>
                {desc}
            </Description>
        </Container>
    );
}