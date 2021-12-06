import { Container, Content, Create, Close } from './styles';

import { DeleteTeacher } from '../../../../api/controllers/Teacher';

import { useHistory } from "react-router-dom";

const ContentComponent = (objeto : any) => {
    const history = useHistory();

    function DeleteData(id: number) {
        DeleteTeacher(id);

        window.location.reload();
      }

    return (
        <Container>
            <Content><b>Nome:</b> {objeto.objeto.name}</Content>
            <Content><b>Apelido:</b> {objeto.objeto.nickname}</Content>
            <Content><b>CPF:</b> {objeto.objeto.cpf}</Content>
            <Content><b>E-mail:</b> {objeto.objeto.email}</Content>
            <Content><b>Telefone:</b> {objeto.objeto.phone}</Content>
            <Content><b>Data de nascimento:</b> {objeto.objeto.birthdate}</Content>
            <Content><b>Comissão:</b> {objeto.objeto.commission}%</Content>
            <Content>
                <b>Opções:</b>
                <Create onClick={() => history.push(`/update/teacher/${objeto.objeto.id}`)}/>
                <Close onClick={() => DeleteData(objeto.objeto.id)}/>
            </Content>
        </Container>
    );
};

export default ContentComponent;