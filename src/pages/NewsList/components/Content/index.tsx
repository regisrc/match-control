import { useHistory } from "react-router-dom";

import { Container, Content, Create, Close } from './styles';

import { DeleteNews } from '../../../../api/controllers/News';

const ContentComponent = (objeto: any) => {
    const history = useHistory();

    function DeleteData(id: number) {
        DeleteNews(id);

        window.location.reload();
    }

    return (
        <Container>
            <Content><b>Id:</b> {objeto.objeto.id}</Content>
            <Content><b>Titulo:</b> {objeto.objeto.title}</Content>
            <Content>
                <b>Opções:</b>
                <Create onClick={() => history.push(`/update/news/${objeto.objeto.id}`)}/>
                <Close onClick={() => DeleteData(objeto.objeto.id)} />
            </Content>
        </Container>
    );
};

export default ContentComponent;