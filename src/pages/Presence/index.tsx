import { useContext, useEffect, useRef, useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';

import TitleCard from './components/TitleCard';
import UserCard from './components/UserCard';
import SnackBar from '../../components/SnackBar';

import { Container } from './styles';

import { IAttendance, IAttendanceStudent, IPresenceProps } from '../../models/interfaces';
import { CheckValues, SnackBarSeverity } from '../../models/enums';

import { Users } from '../../context/Presence';
import { useParams } from 'react-router';
import { GetOneGroup, Attendance } from '../../api/controllers/Group';
import { AxiosResponse } from 'axios';

const Presence = () => {
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });

    const [call, setCall] = useState<AxiosResponse | null | void>(null);

    const params = useParams<any>();

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetOneGroup(params.id)

            setCall(result)
        }; 
    
        asyncCall();
    }, [params])

    const titleText = 'Lista de Presença';
    const context = useRef(useContext(Users));

    const handleSuccess = () => {
        var studentsData: Array<IAttendanceStudent> = [];

        call?.data.students.map((studentdata: any) => {
            const temp: IAttendanceStudent = {
                id: studentdata.id,
                present: studentdata.active ? CheckValues.CheckValue : CheckValues.NotCheckValue
            }

            studentsData.push(temp)
        })

        
        var currentdate = new Date(); 
        var currentMonth = currentdate.getMonth()+1;
        var datetime = currentdate.getFullYear() + "-"
                + (currentMonth.toString().length === 1 ? "0" + currentMonth : currentMonth)  + "-" 
                + (currentdate.getDate().toString().length === 1 ? "0" + currentdate.getDate() : currentdate.getDate()) + "T" 
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + (currentdate.getSeconds().toString().length === 1 ? "0" + currentdate.getSeconds() : currentdate.getSeconds());

        const data: IAttendance = {
            date: datetime, 
            groupId: call?.data.id,
            students: studentsData
        }

        Attendance(data)

        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = () => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: "Preencha todos os campos!"});
    };

    const ButtonClick = () => {
        const index: boolean = !call?.data.students.some((x:any) => x.active === undefined);

        if(index) 
            handleSuccess()
        else 
            handleError();
    }
    
    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/presenceGroup"} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState}/>
            <Container>
                <TitleCard firstLine={call?.data.name} secondLine={call?.data.modality.name}/>
                {call?.data.students.map((prop: any, index: number) => 
                    <UserCard key={index} value={prop} />
                )}
                <Button onClick={() => ButtonClick()} text={"Gravar"}/>
            </Container>
        </>
    );
};

export default Presence;