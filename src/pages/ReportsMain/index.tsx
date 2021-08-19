import { useHistory } from "react-router-dom";

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';

const ReportsMain = () => {
    const history = useHistory();

    const titleText = 'Relatórios';
    const perDate = 'Por data';
    const perStudent = 'Por aluno';

    const datePath = 'report/date';
    const studentPath = 'report/student';

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={""}/>
            <Container>
                <Content>
                    <Button onClick={() => history.push(datePath)}>{perDate}</Button>
                    <Button onClick={() => history.push(studentPath)}>{perStudent}</Button>
                </Content>
            </Container>
        </>
    );
};

export default ReportsMain;