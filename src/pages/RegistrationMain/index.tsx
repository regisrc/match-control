import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { IMenuComponentProps } from '../../models/interfaces';
import SchoolIcon from '@material-ui/icons/School';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const RegistrationMain = () => {
    const settings : IMenuComponentProps = {
        "title": "Cadastros",
        "returnActive": true,
        "path": "",
        "buttons": [
            {
                "title": "Aluno",
                "path": "registration/student",
                "icon": SchoolIcon
            },
            {
                "title": "Professor",
                "path": "registration/teacher",
                "icon": SupervisorAccountIcon
            }
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