import { useHistory } from "react-router-dom";

import { Container, Content, Create, Close } from './styles';

import { DeleteModality } from '../../../../api/controllers/Modality';

const ContentComponent = (objeto : any) => {
    const history = useHistory();

    function DeleteData(id: number) {
        DeleteModality(id);

        window.location.reload();
      }

    return (
        <Container>
            <Content><b>Id:</b> {objeto.objeto.id}</Content>
            <Content><b>Nome:</b> {objeto.objeto.name}</Content>
            <Content>
                <b>Opções:</b>
                <Create onClick={() => history.push(`/update/modality/${objeto.objeto.id}`)}/>
                <Close onClick={() => DeleteData(objeto.objeto.id)} />
            </Content>
        </Container>
    );
};

export default ContentComponent;