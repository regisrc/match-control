import { useState } from 'react'; 

import { Container, Input, StyledButton as Button } from './styles';

import Header from '../../components/Header';
import { INewsNotification } from '../../models/interfaces';

import { PostNews } from '../../api/controllers/News';

import SnackBar from '../../components/SnackBar';
import { SnackBarSeverity } from '../../models/enums';

const NewsRegister = () => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = (message: string) => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: message });
    };

    const showData = async () => {
        setLoading(true)

        const data : INewsNotification = {
            "title": title,
            "text": content,
            "showDate": date,
            "isHoliday": false,
            "userId": 1
        }

        if (validateData(data))
            await PostNews(data).then(handleSuccess).catch(() => handleError("Ocorreu um problema!"));
        else
            handleError("Existem problemas com os campos!")

        setLoading(false)
    }

    const validateData = (data: INewsNotification) => {
        var temp = true;

        for (const [key, value] of Object.entries(data)) {
            if(value.length === 0) {
                temp = false;

                break;
            }
        }

        return temp;
    }

    return (
        <>
            <Header title={"Registro de Notícias"} isReturnActive={true} path={"/registration"} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} />
            <Container>
                <Input label="Titulo" onChange={(e) => setTitle(e.target.value)} />
                <Input
                    label="Data agendada"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setDate(e.target.value)}
                />
                <Input
                    label="Conteúdo da mensagem"
                    multiline
                    rows={9}
                    variant="filled"
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button loading={loading} loadingPosition="center" variant="contained" onClick={() => showData()}>Registrar</Button>
            </Container>
        </>
    )
}

export default NewsRegister;