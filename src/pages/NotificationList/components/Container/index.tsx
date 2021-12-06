import { Container, Title} from './styles';

const ContainerComponent = (objeto : any) => {
    return (
        <Container>
            <Title>{objeto.objeto.title}</Title>
        </Container>
    );
};

export default ContainerComponent;