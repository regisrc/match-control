import { useState, useEffect } from 'react'; 

import { Container, Input, StyledButton as Button } from './styles';

import Header from '../../components/Header';
import { IModality } from '../../models/interfaces';

import { UpdateModality, GetOneModality } from '../../api/controllers/Modality';

import SnackBar from '../../components/SnackBar';
import { SnackBarSeverity } from '../../models/enums';
import { useParams } from 'react-router-dom';

const ModalityRegister = () => {
    const params = useParams<any>();

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });

    const [data, setData] = useState<any>("");
    const [name, setName] = useState("");

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetOneModality(params.id)

            setData(result) 
        }; 
    
        asyncCall();
    }, [])

    useEffect(() => {
        if(data == null)
            return;

        setName(data?.data?.name);
    }, [data])

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = (message: string) => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: message });
    };

    const showData = async () => {
        setLoading(true)

        const data : IModality = {
            "name": name
        }

        if (validateData(data))
            await UpdateModality(params.id, data).then(handleSuccess).catch(() => handleError("Ocorreu um problema!"));
        else
            handleError("Existem problemas com os campos!")

        setLoading(false)
    }

    const validateData = (data: IModality) => {
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
            <Header title={"Atualização de modalidade"} isReturnActive={true} path={"/list/modality"} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} />
            <Container>
                <Input label="Nome*" onChange={(e) => setName(e.target.value)} value={name} />
                <Button loading={loading} loadingPosition="center" variant="contained" onClick={() => showData()}>Registrar</Button>
            </Container>
        </>
    )
}

export default ModalityRegister;