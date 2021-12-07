import { useState, useEffect } from 'react';
import { AxiosResponse } from "axios";

import { Container, Input, StyledButton as Button, AutoComplete, MultiSelectDiv, MultiSelect } from './styles';

import Header from '../../components/Header';
import { IGroup } from '../../models/interfaces';

import { SaveGroup } from '../../api/controllers/Group';
import { GetModality } from '../../api/controllers/Modality';
import { GetStudents } from '../../api/controllers/Student';
import { GetTeacher } from '../../api/controllers/Teacher';

import SnackBar from '../../components/SnackBar';
import { SnackBarSeverity } from '../../models/enums';

const GroupUpdate = () => {
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });
    const [callStudents, setCallStudents] = useState<AxiosResponse | null | void>(null);
    const [callTeacher, setCallTeacher] = useState<AxiosResponse | null | void>(null);
    const [callModality, setCallModality] = useState<AxiosResponse | null | void>(null);

    const [name, setName] = useState("");
    const [modality, setModality] = useState(callModality?.data[0]);
    const [teacher, setTeacher] = useState(callTeacher?.data[0]);
    const [selectedValues, setSelectedValues] = useState([])

    useEffect(() => {
        const asyncCall = async () => {
            const resultStudents = await GetStudents()
            const resultTeacher = await GetTeacher()
            const resultModality = await GetModality()

            setCallStudents(resultStudents);
            setCallTeacher(resultTeacher);
            setCallModality(resultModality);
        };
    
        asyncCall();
    }, [])

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = (message: string) => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: message });
    };

    const showData = async () => {
        const data: IGroup = {
            "name": name,
            "students": [], 
            "modalityId": modality.id,
            "teacherId": teacher.id
        }

        await SaveGroup(data).then(handleSuccess).catch(() => handleError("Ocorreu um problema!"));
    }

    return (
        <>
            <Header title={"Atualização de turma"} isReturnActive={true} path={"/list/group"} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} />
            <Container>
                <Input label="Nome" onChange={(e) => setName(e.target.value)}/>
                <MultiSelectDiv>
                    <MultiSelect
                        options={callStudents?.data}
                        selectedValues={selectedValues}
                        placeholder="Alunos"
                        displayValue="name"
                    />
                </MultiSelectDiv>
                <AutoComplete
                    disablePortal
                    options={callTeacher?.data}
                    getOptionLabel={(option: any) => option.name}
                    onChange={(e: any, nv: any)  => setTeacher(nv)}
                    renderInput={(params: any) => <Input {...params} label="Professor" />}
                />
                <AutoComplete
                    disablePortal
                    options={callModality?.data}
                    getOptionLabel={(option: any) => option.name}
                    onChange={(e: any, nv: any) => setModality(nv)}
                    renderInput={(params: any) => <Input {...params} label="Modalidade" />}
                />
                <Button variant="contained" onClick={() => showData()}>Registrar</Button>
            </Container>
        </>
    )
}

export default GroupUpdate;