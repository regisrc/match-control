import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';

const Main = () => {
    const history = useHistory();

    const changePage = (page: string) => {
        Toast.close();
        history.push(page)
    }

    const titleText = 'Página Inicial';
    const presencePage = 'Presença';
    const reportsPage = 'Relatórios';
    const newsPage = 'Notícias';
    const registrationPage = 'Cadastros';

    const presencePath = 'presence';
    const reportPath = 'report';
    const newsPath = 'news';
    const registrationPath = 'registration';

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: true,
        confirmButtonText: 'Verificar',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'info',
        title: 'Você tem novos avisos! Clique aqui para acessar'
    }).then((result) => {
        if (result.isConfirmed) {
            history.push(newsPath)
        }
    })

    return (
        <>
            <Header title={titleText} isReturnActive={false} />
            <Container>
                <Content>
                    <Button onClick={() => changePage(presencePath)}>{presencePage}</Button>
                    <Button onClick={() => changePage(reportPath)}>{reportsPage}</Button>
                    <Button onClick={() => changePage(newsPath)}>{newsPage}</Button>
                    <Button onClick={() => changePage(registrationPath)}>{registrationPage}</Button>
                </Content>
            </Container>
        </>
    );
};

export default Main;