import { Container, Title } from './styles';

const ContainerComponent = (objeto : any) => {
    console.log(objeto.objeto)

    return (
        <Container>
            <Title>{objeto.objeto.name}</Title>
        </Container>
    );
};

export default ContainerComponent;