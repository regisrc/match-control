import ArrowBack from '../../assets/bx-arrow-back.svg';

import { Container, Icon, Title } from './styles';

const ReturnButton = () => {
    const title = "voltar";

    return (
        <Container onClick={() => alert(title)}>
            <Icon src={ArrowBack}></Icon>
            <Title>{title.toUpperCase()}</Title>
        </Container>)
}

export default ReturnButton;