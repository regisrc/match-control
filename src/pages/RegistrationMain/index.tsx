import { useHistory } from "react-router-dom";

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { IMenuComponentProps } from '../../models/interfaces';

const RegistrationMain = () => {
    const history = useHistory();

    const settings : IMenuComponentProps = {
        "title": "Cadastros",
        "returnActive": true,
        "path": "",
        "buttons": [
            {
                "title": "Aluno",
                "path": "registration/student"
            },
            {
                "title": "Professor",
                "path": "registration/teacher"
            },
        ]
    };

    return (
        <>
            <Header title={settings.title} isReturnActive={settings.returnActive} path={settings.path} />
            <Menu values={settings.buttons} />
        </>
    );
};

export default RegistrationMain;