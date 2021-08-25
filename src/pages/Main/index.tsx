import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';

const Main = () => {
    const history = useHistory();

    const titleText = 'Página Inicial';
    const presencePage = 'Presença';
    const reportsPage = 'Relatórios';
    const newsPage = 'Notícias';

    const presencePath = 'presence';
    const reportPath = 'report';
    const newsPath = 'news';

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            toast.addEventListener('click', () => history.push(newsPath))
        }
    })

    Toast.fire({
        icon: 'info',
        title: 'Você tem novos avisos! Clique aqui para acessar'
    })

    return (
        <>
            <Header title={titleText} isReturnActive={false} />
            <Container>
                <Content>
                    <Button onClick={() => history.push(presencePath)}>{presencePage}</Button>
                    <Button onClick={() => history.push(reportPath)}>{reportsPage}</Button>
                    <Button onClick={() => history.push(newsPath)}>{newsPage}</Button>
                </Content>
            </Container>
        </>
    );
};

export default Main;