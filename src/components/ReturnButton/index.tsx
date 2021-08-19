import { useHistory } from "react-router-dom";
import ArrowBack from '../../assets/bx-arrow-back.svg';

import { Container, Icon, Title } from './styles';

interface IReturnButton {
    path?: string;
}

const ReturnButton = ({ path }: IReturnButton) => {
    const history = useHistory();

    const title = "voltar";

    return (
        <Container onClick={() => history.push(path!)}>
            <Icon src={ArrowBack}></Icon>
            <Title>{title.toUpperCase()}</Title>
        </Container>)
}

export default ReturnButton;