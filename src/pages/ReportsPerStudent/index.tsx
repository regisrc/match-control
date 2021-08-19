import { useHistory } from "react-router-dom";

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';

const ReportsPerStudent = () => {
    const history = useHistory();

    const titleText = 'Relatório por aluno';

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/report"}/>
            <Container>
                <Content>
                </Content>
            </Container>
        </>
    );
};

export default ReportsPerStudent;