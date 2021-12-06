import { useHistory } from "react-router-dom";

import { Container, Content, Create, Close } from './styles';

import { DeleteGroup } from '../../../../api/controllers/Group';

const ContentComponent = (objeto : any) => {
    const history = useHistory();

    function DeleteData(id: number) {
        DeleteGroup(id);

        window.location.reload();
      }

    return (
        <Container>
            <Content><b>Id:</b> {objeto.objeto.id}</Content>
            <Content><b>Nome:</b> {objeto.objeto.name}</Content>
            <Content><b>Professor:</b> {objeto.objeto.teacher}</Content>
            <Content><b>Modalidade:</b> {objeto.objeto.modality}</Content>
            <Content><b>Alunos:</b> {objeto.objeto.students}</Content>
            <Content>
                <b>Opções:</b>
                <Create onClick={() => history.push(`/update/group/${objeto.objeto.id}`)}/>
                <Close onClick={() => DeleteData(objeto.objeto.id)}/>
            </Content>
        </Container>
    );
};

export default ContentComponent;