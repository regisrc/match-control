import { useState, useEffect } from 'react';

import Header from '../../components/Header';

import UserCard from './components/UserCard';

import { Container } from './styles';

import { GetStudents } from '../../api/controllers/Student'
import { AxiosResponse } from 'axios';
import FloatAddButton from '../../components/FloatAddButton';
import { useParams } from 'react-router-dom';



const GraduationStudentChoose = () => {
    const titleText = 'Escolha de alunos';

    const [call, setCall] = useState<AxiosResponse | null | void>(null);
    
    const params = useParams<any>();

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetStudents()

            setCall(result)
        };

        asyncCall();
    }, [])

    const noData = "Não existem dados :)";

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/main"} />
            <Container>
                {call?.data.length === 0 && <h2>{noData}</h2>}
                {call?.data.map((prop: any, index: number) =>
                    <UserCard key={index} id={prop.id} value={prop} />
                )}
            </Container>
        </>
    );
};

export default GraduationStudentChoose;