import {
    Container,
    PercentText,
    Description,
    IconTouch,
    Icon,
    IconHeader
} from './styles'

type Props = {
    dietHealthy: boolean;
    isHeader?: boolean;
    goBack?: () => void;
}

export function Percent({ dietHealthy, isHeader = false, goBack } : Props) {
    return (
        <Container dietHealthy={dietHealthy} isHeader={isHeader}>
            <IconTouch 
                dietHealthy={dietHealthy} 
                isHeader={isHeader}
                onPress={goBack}
            >
                {
                    isHeader ? 
                        <IconHeader dietHealthy={dietHealthy} isHeader={isHeader} /> :
                        <Icon dietHealthy={dietHealthy} isHeader={isHeader} />
                }
            </IconTouch>
            
            <PercentText>90,0%</PercentText>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    );
}