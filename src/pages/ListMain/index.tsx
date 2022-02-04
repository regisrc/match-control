import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { IMenuComponentProps } from '../../models/interfaces';

import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import GroupsIcon from '@material-ui/icons/Group';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NewsIcon from '@material-ui/icons/Announcement';

const ListMain = () => {
    const settings : IMenuComponentProps = {
        "title": "Cadastros",
        "returnActive": true,
        "path": "main",
        "buttons": [
            {
                "title": "Aluno",
                "path": "list/student",
                "icon": SchoolIcon
            },
            {
                "title": "Professor",
                "path": "list/teacher",
                "icon": DirectionsRunIcon
            },
            {
                "title": "Modalidade",
                "path": "list/modality",
                "icon": SportsKabaddiIcon
            },
            {
                "title": "Turma",
                "path": "list/group",
                "icon": GroupsIcon
            },
            {
                "title": "Notícias",
                "path": "list/news",
                "icon": NewsIcon
            },
            {
                "title": "Notificações",
                "path": "list/notifications",
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

export default ListMain;