import { Container, Title, DivTitleTeams, TitleTeams } from './styles';

const ContainerComponent = (objeto : any, group : any) => {
    console.log(group)

    return (
        <Container>
            <Title>{objeto.objeto.name}</Title>
            <DivTitleTeams>
                {objeto.objeto.groups?.map((value: any, index: number) => <TitleTeams>{value}</TitleTeams>)}
            </DivTitleTeams>
        </Container>
    );
};

export default ContainerComponent;