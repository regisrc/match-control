import { Container, Title, Subtitle } from './styles';

const ContainerComponent = (objeto : any) => {
    return (
        <Container>
            <Title>{objeto.objeto.name}</Title>
            <Subtitle>{objeto.objeto.modality.name}</Subtitle>
        </Container>
    );
};

export default ContainerComponent;