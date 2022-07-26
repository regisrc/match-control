import DoneOutlineIcon from '@material-ui/icons/Done';
import ImportContactsIcon from '@material-ui/icons/Assessment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import NewsIcon from '@material-ui/icons/Announcement';
import ListIcon from '@material-ui/icons/List';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import SnackBar from '../../components/SnackBar';

import { IMenuComponentProps } from '../../models/interfaces';
import { SnackBarSeverity } from '../../models/enums';

const Main = () => {
    const settings : IMenuComponentProps = {
        "title": "Página Inicial",
        "returnActive": false,
        "path": "",
        "buttons": [
            {
                "title": "Presença",
                "path": "presencegroup",
                "icon": DoneOutlineIcon
            },
            {
                "title": "Relatórios",
                "path": "report",
                "icon": ImportContactsIcon
            },
            {
                "title": "Notícias",
                "path": "news",
                "icon": NewsIcon
            },
            {
                "title": "Notificações",
                "path": "notifications",
                "icon": NotificationsIcon  
            },
            {
                "title": "Cadastros",
                "path": "list",
                "icon": ListIcon  
            },
            {
                "title": "Graduação",
                "path": "graduationstudent",
                "icon": ListIcon  
            }
        ]
    };

    return (
        <>
            <Header title={settings.title} isReturnActive={settings.returnActive} />
            <SnackBar alertMessage={"Você tem novas mensagens!"} showButton={true} buttonPath={settings.buttons[2].path} severity={SnackBarSeverity.Info} buttonMessage={"Visualizar"} snackBarOpen={true}/>
            <Menu values={settings.buttons} />
        </>
    );
};

export default Main;