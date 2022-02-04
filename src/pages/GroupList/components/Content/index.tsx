import { useHistory } from "react-router-dom";

import { Container, Content, Create, Close } from './styles';

import { DeleteGroup } from '../../../../api/controllers/Group';

const ContentComponent = (objeto : any) => {
    const history = useHistory();

    function DeleteData(id: number) {
        DeleteGroup(id);

        window.location.reload();
      }

    console.log(objeto.objeto)

    return (
        <Container>
            <Content><b>Id:</b> {objeto.objeto.modality.id}</Content>
            <Content><b>Nome:</b> {objeto.objeto.modality.name}</Content>
            <Content><b>Professor:</b> {objeto.objeto.teacher.name}</Content>
            <Content><b>Alunos: </b></Content>
            <Content><b>Nome - Apelido</b></Content>
            {
            objeto.objeto.students.map((value: any, index: number) => 
                <Content>{value.name} - {value.nickname}</Content>
            )}
            <Content>
                <b>Opções:</b>
                <Create onClick={() => history.push(`/update/group/${objeto.objeto.id}`)}/>
                <Close onClick={() => DeleteData(objeto.objeto.id)}/>
            </Content>
        </Container>
    );
};

export default ContentComponent;