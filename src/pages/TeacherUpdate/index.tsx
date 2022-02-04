import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router';

import { AxiosResponse } from "axios";

import { Container, Input, StyledButton as Button, Mask } from './styles';

import Header from '../../components/Header';
import { ITeacher } from '../../models/interfaces';

import { PutTeacher, GetOneTeacher } from '../../api/controllers/Teacher';

import SnackBar from '../../components/SnackBar';
import { SnackBarSeverity } from '../../models/enums';

const TeacherUpdate = () => {
    const [call, setCall] = useState<AxiosResponse | null | void>(null);
    const params = useParams<any>();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });

    const [name, setName] = useState("");
    const [nickname, setNickName] = useState("");
    const [birthday, setBirthDay] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comission, setCommission] = useState("");

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = (message: string) => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: message });
    };

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetOneTeacher(params.id)

            setCall(result)
        }; 
    
        asyncCall();
    }, [params])

    useEffect(() => {
        if(call == null)
            return;

        setName(call?.data.name);
        setNickName(call?.data.nickname);
        setBirthDay(call?.data.birthdate);
        setCpf(call?.data.cpf);
        setEmail(call?.data.email);
        setPhone(call?.data.phone);
        setCommission(call?.data.commission)
    }, [call])

    const showData = async () => {
        setLoading(true)

        const data : ITeacher = {
            "name": name,
            "nickname": nickname,
            "birthdate": birthday,
            "cpf": cpf,
            "email": email,
            "phone": phone,
            "commission": comission
        }

        if (validateData(data))
            await PutTeacher(data, params.id).then(handleSuccess).catch(() => handleError("Ocorreu um problema!"));
        else
            handleError("Existem problemas com os campos!")

        setLoading(false)
    }

    const validateData = (data: ITeacher) => {
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
            <Header title={"Atualização de professor"} isReturnActive={true} path={"/list/teacher"} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} />
            <Container>
            <Input value={name} label="Nome" onChange={(e) => setName(e.target.value)} />
                <Input value={nickname} label="Apelido" onChange={(e) => setNickName(e.target.value)}/>
                <Mask
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)} >
                    {() => <Input label="CPF" />}
                </Mask>
                <Input value={email} label="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <Mask
                    mask="(99) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} >
                    {() => <Input label="Telefone" />}
                </Mask>
                <Input value={comission} label="Comissão (apenas numérico sem %)" onChange={(e) => setCommission(e.target.value)}/>
                <Input
                    value={birthday}
                    label="Data de Nascimento"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setBirthDay(e.target.value)}
                />
                <Button loading={loading} loadingPosition="center" variant="contained" onClick={() => showData()}>Registrar</Button>
            </Container>
        </>
    )
}

export default TeacherUpdate;