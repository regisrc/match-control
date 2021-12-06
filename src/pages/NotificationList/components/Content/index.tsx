import { useHistory } from "react-router-dom";

import { Container, Content, Create, Close } from './styles';

import { DeleteNotifications } from '../../../../api/controllers/Notifications';

const ContentComponent = (objeto : any) => {
    const history = useHistory();

    function DeleteData(id: number) {
        DeleteNotifications(id);

        window.location.reload();
      }

    return (
        <Container>
            <Content><b>Id:</b> {objeto.objeto.id}</Content>
            <Content><b>Titulo:</b> {objeto.objeto.title}</Content>
            <Content>
                <b>Opções:</b>
                <Create onClick={() => history.push(`/update/notification/${objeto.objeto.id}`)}/>
                <Close onClick={() => DeleteData(objeto.objeto.id)} />
            </Content>
        </Container>
    );
};

export default ContentComponent;