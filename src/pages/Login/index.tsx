import { useState } from 'react';
import { useHistory } from "react-router-dom";

import LogoImage from '../../assets/logo.jpeg';

import Header from '../../components/Header';
import SnackBar from '../../components/SnackBar';

import { IMenuComponentProps, ILogin, IUserSettingsCache } from '../../models/interfaces';
import { SnackBarSeverity } from '../../models/enums';
import { Container, Title, StyledButton as Button, Logo, Footer, VersionText } from './styles';
import { PostLogin } from '../../api/controllers/Login';
import { SetNewUser } from '../../context';

const Login = () => {
    const history = useHistory();

    return (
        <Container>
            <Logo src={LogoImage}/>
            <Title>Você não está autenticado, clique para se logar</Title>
            <Button onClick={() => history.push("/main")}>Autenticar</Button>
            <Footer>
                <VersionText>
                    Versão: {process.env.REACT_APP_APP_VERSION}
                </VersionText>
            </Footer>
        </Container>
    );
};

export default Login;