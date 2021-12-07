import { useState } from 'react';
import { useHistory } from "react-router-dom";

import LogoImage from '../../assets/logo.jpeg';

import Header from '../../components/Header';
import SnackBar from '../../components/SnackBar';

import { IMenuComponentProps } from '../../models/interfaces';
import { SnackBarSeverity } from '../../models/enums';
import { Container, Input, StyledButton as Button, Logo } from './styles';

const Login = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const settings : IMenuComponentProps = {
        "title": "Login",
        "returnActive": false,
        "path": "",
        "buttons": []
    };

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Logado com sucesso!" });
    };

    const handleError = (message: string) => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: message });
    };

    const authenticate = async () => {
        setLoading(true)
        
        var isAuthenticated = login === "admin" && password === "matchcontrol";

        if (isAuthenticated) {
            handleSuccess()
            history.push(`/main`)
        }
        else
            handleError("Login falhou!")

        setLoading(false)
    }

    return (
        <>
            <Header title={settings.title} isReturnActive={settings.returnActive} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} />
            <Container>
                <Logo src={LogoImage}/>
                <Input label="Login" onChange={(e) => setLogin(e.target.value)} />
                <Input label="Senha" type={"password"} onChange={(e) => setPassword(e.target.value)} />
                <Button loading={loading} loadingPosition="center" variant="contained" onClick={() => authenticate()}>Logar</Button>
            </Container>
        </>
    );
};

export default Login;