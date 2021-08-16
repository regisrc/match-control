import { Container, Title, CompleteDiv } from './styles';

import ReturnButton from '../ReturnButton'

const Header = () => {
    const TitleText = 'Lista de Presença';

    return (
        <Container>
            <ReturnButton />
            <Title>{TitleText}</Title>
            <CompleteDiv />
        </Container>)
}

export default Header;