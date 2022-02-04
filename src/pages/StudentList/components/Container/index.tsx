import { Container, Title } from './styles';

const ContainerComponent = (objeto : any, group : any) => {
    console.log(group)

    return (
        <Container>
            <Title>{objeto.objeto.name}</Title>
        </Container>
    );
};

export default ContainerComponent;