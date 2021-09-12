import Header from '../../components/Header';
import Menu from '../../components/Menu';

import SchoolIcon from '@material-ui/icons/School';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import { IMenuComponentProps } from "../../models/interfaces";

const ReportsMain = () => {
    const settings : IMenuComponentProps = {
        "title": "Relatórios",
        "returnActive": true,
        "path": "",
        "buttons": [
            {
                "title": "Por data",
                "path": "report/date",
                "icon": CalendarTodayIcon
            },
            {
                "title": "Por aluno",
                "path": "report/student",
                "icon": SchoolIcon
            }
        ]
    };

    return (
        <>
            <Header title={settings.title} isReturnActive={settings.returnActive} path={settings.path}/>
            <Menu values={settings.buttons} />
        </>
    );
};

export default ReportsMain;