import { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Container, Content, Button, MaterialButton } from './styles';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SnackbarOrigin } from '@material-ui/core/Snackbar';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CreateIcon from '@material-ui/icons/Create';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { IMenuComponentProps } from '../../models/interfaces';

const Main = () => {
    const [state, setState] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;

    const history = useHistory();

    const changePage = (page: string) => {
        history.push(page)
    }

    const handleClick = (newState: any) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const settings : IMenuComponentProps = {
        "title": "Página Inicial",
        "returnActive": false,
        "path": "",
        "buttons": [
            {
                "title": "Presença",
                "path": "presence",
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
                "icon": NotificationsIcon
            },
            {
                "title": "Cadastros",
                "path": "registration",
                "icon": CreateIcon
            }
        ]
    };

    const anchor: SnackbarOrigin = {
        vertical: 'top',
        horizontal: 'right'
    }

    function Alert(props: any) {
        return <MuiAlert action={<MaterialButton variant="outlined" color="primary" onClick={() => changePage(settings.buttons[2].path)}>
            Visualizar
        </MaterialButton>} elevation={6} variant="filled" {...props} />;
    }

    return (
        <>
            <Header title={settings.title} isReturnActive={settings.returnActive} />
            <Snackbar
                anchorOrigin={anchor}
                open={open}
                onClose={handleClose}
                autoHideDuration={6000}
                message="I love snacks"
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="info"> 
                    Você tem novas mensagens!
                </Alert>
            </Snackbar>
            <Menu values={settings.buttons} />
        </>
    );
};

export default Main;