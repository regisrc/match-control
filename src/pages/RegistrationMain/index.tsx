import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { IMenuComponentProps } from '../../models/interfaces';

import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import GroupsIcon from '@material-ui/icons/Group';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NewsIcon from '@material-ui/icons/Announcement';

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
                "icon": DirectionsRunIcon
            },
            {
                "title": "Modalidade",
                "path": "registration/modality",
                "icon": SportsKabaddiIcon
            },
            {
                "title": "Turma",
                "path": "registration/group",
                "icon": GroupsIcon
            },
            {
                "title": "Notícias",
                "path": "registration/news",
                "icon": NewsIcon
            },
            {
                "title": "Notificações",
                "path": "registration/notifications",
                "icon": NotificationsIcon
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