import { useContext, useEffect, useRef, useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';

import TitleCard from './components/TitleCard';
import UserCard from './components/UserCard';
import SnackBar from '../../components/SnackBar';

import { Container } from './styles';

import { IAttendance, IAttendanceStudent, IDateAttendance, IPresenceProps } from '../../models/interfaces';
import { CheckValues, SnackBarSeverity } from '../../models/enums';

import { Users } from '../../context/Presence';
import { useParams } from 'react-router';
import { GetOneGroup, Attendance, AttendanceGetDates } from '../../api/controllers/Group';
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
            let result = null

            if (!params.date)
                result = await GetOneGroup(params.id)
            else {
                const parametros : IDateAttendance = {
                    groupId: params.id,
                    date: params.date
                }

                result = await AttendanceGetDates(parametros)
            }

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
                present: studentdata.present ? CheckValues.CheckValue : CheckValues.NotCheckValue
            }

            studentsData.push(temp)
        })

        var datetime = "";

        
        if (params.date) {
            datetime = params.date.substring(0, 10)
        }
        else {
            var currentdate = new Date(); 
            var currentMonth = currentdate.getMonth()+1;
            datetime = currentdate.getFullYear() + "-"
                    + (currentMonth.toString().length === 1 ? "0" + currentMonth : currentMonth)  + "-" 
                    + (currentdate.getDate().toString().length === 1 ? "0" + currentdate.getDate() : currentdate.getDate());
        }

        const data: IAttendance = {
            date: datetime, 
            groupId: call?.data.id || params?.id,
            students: studentsData
        }

        Attendance(data)

        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = () => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: "Preencha todos os campos!"});
    };

    const ButtonClick = () => {
        const index: boolean = !call?.data.students.some((x:any) => x.present === undefined);

        if(index) 
            handleSuccess()
        else 
            handleError();
    }
    
    return (
        <>
            <Header title={titleText} isReturnActive={true} path={`/presenceGroup/date/${params.id}`} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState}/>
            <Container>
                {/* <TitleCard firstLine={call?.data.name} secondLine={call?.data.modality.name}/> */}
                {call?.data.students.map((prop: any, index: number) => 
                    <UserCard key={index} value={prop} />
                )}
                <Button onClick={() => ButtonClick()} text={"Gravar"}/>
            </Container>
        </>
    );
};

export default Presence;