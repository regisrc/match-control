import { useContext, useRef, useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';

import TitleCard from './components/TitleCard';
import UserCard from './components/UserCard';
import SnackBar from '../../components/SnackBar';

import { Container } from './styles';

import { IPresenceProps } from '../../models/interfaces';
import { SnackBarSeverity } from '../../models/enums';

import { Users } from '../../context/Presence';

const Presence = () => {
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });

    const titleText = 'Lista de Presença';
    const context = useRef(useContext(Users));

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = () => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: "Preencha todos os campos!"});
    };

    const ButtonClick = () => {
        const index: boolean = context.current.some(x => x.value === 0) ? false : true;

        if(index) 
            handleSuccess()
        else 
            handleError();
    }

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={""} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState}/>
            <Container>
                <TitleCard firstLine="Turma 20hrs - Segunda e Quarta" secondLine="31/07/2021"/>
                {context.current.map((prop: IPresenceProps, index: number) =>
                    <UserCard key={index} value={prop} />
                )}
                <Button onClick={() => ButtonClick()} text={"Gravar"}/>
            </Container>
        </>
    );
};

export default Presence;