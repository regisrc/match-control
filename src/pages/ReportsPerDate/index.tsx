import { useHistory } from "react-router-dom";

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';

const ReportsPerDate = () => {
    const history = useHistory();

    const titleText = 'Relatório por data';

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

export default ReportsPerDate;