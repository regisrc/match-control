import { useState, useEffect } from 'react';
import { AxiosResponse } from "axios";
import { useParams } from 'react-router';

import { Container, Input, StyledButton as Button, Mask, MultiSelectDiv, MultiSelect } from './styles';

import Header from '../../components/Header';
import { IStudent } from '../../models/interfaces';

import { PutStudent, GetStudent } from '../../api/controllers/Student';
import { GetGroup } from '../../api/controllers/Group';

import SnackBar from '../../components/SnackBar';
import { SnackBarSeverity } from '../../models/enums';

const StudentUpdate = () => {
    const params = useParams<any>();

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "", 
    });

    const [call, setCall] = useState<AxiosResponse | null | void>(null);
    const [studentCall, setStudentCall] = useState<AxiosResponse | null | void>(null);

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetGroup()
            const studentResult = await GetStudent(params.id)

            setCall(result) 
            setStudentCall(studentResult)
        }; 
    
        asyncCall();
    }, [params])

    const [name, setName] = useState("");
    const [nickname, setNickName] = useState("");
    const [group, setGroup] = useState("");
    const [birthday, setBirthDay] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedValues, setSelectedValues] = useState([])

    useEffect(() => {
        if(studentCall == null)
            return;

        setName(studentCall?.data.name);
        setNickName(studentCall?.data.nickname);
        setBirthDay(studentCall?.data.birthdate);
        setCpf(studentCall?.data.cpf);
        setEmail(studentCall?.data.email);
        setPhone(studentCall?.data.phone);
    }, [studentCall])

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = (message: string) => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: message });
    };

    const showData = async () => {
        setLoading(true)
        
        const data: IStudent = {
            "name": name,
            "nickname": nickname,
            "birthdate": birthday,
            "cpf": cpf.replaceAll('.', '').replace('-', ''),
            "email": email,
            "phone": phone.replace('-', "").replace('(', "").replace(')', "").replace(' ', '')
        }

        if (validateData(data))
            await PutStudent(data, params.id).then(handleSuccess).catch(() => handleError("Ocorreu um problema!"));
        else
            handleError("Existem problemas com os campos!")

        setLoading(false)
    }

    const validateData = (data: IStudent) => {
        var temp = true;

        for (const [key, value] of Object.entries(data)) {
            if (value.length === 0) {
                temp = false;

                break;
            }
        }

        return temp;
    }

    return (
        <>
            <Header title={"Atualização de aluno"} isReturnActive={true} path={"/list/student"} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} />
            <Container>
                <Input value={name} label="Nome" onChange={(e) => setName(e.target.value)} />
                <Input value={nickname} label="Apelido" onChange={(e) => setNickName(e.target.value)} />
                <MultiSelectDiv>
                    <MultiSelect
                        options={call?.data}
                        selectedValues={selectedValues} 
                        placeholder="Turmas"
                        displayValue="name"
                    />
                </MultiSelectDiv>
                <Mask
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)} >
                    {() => <Input label="CPF" />}
                </Mask>
                <Input value={email} label="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <Mask
                    mask="(99) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} >
                    {() => <Input label="Telefone" />}
                </Mask>
                <Input
                    value={birthday}
                    label="Data de Nascimento"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setBirthDay(e.target.value)}
                />
                <Button loading={loading} loadingPosition="center" variant="contained" onClick={() => showData()}>Atualizar</Button>
            </Container>
        </>
    )
}

export default StudentUpdate;