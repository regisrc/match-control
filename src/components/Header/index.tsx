import { Container, Title, CompleteDiv } from './styles';

import ReturnButton from '../ReturnButton'
import Image from '../../assets/logo-vo2.png';

import { IHeaderSettings } from '../../models/interfaces';

const Header = ({title, isReturnActive, path} : IHeaderSettings) => {
    return (
        <Container>
            {isReturnActive ? <ReturnButton path={path}/> : <CompleteDiv width="59px"/>}
            <Title>{title}</Title>
            <CompleteDiv width="59px"/>
        </Container>)
}

export default Header;