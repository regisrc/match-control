import { useState, useEffect } from 'react';

import Header from '../../components/Header';

import UserCard from './components/UserCard';

import { Container } from './styles';

import { AttendanceDates } from '../../api/controllers/Group'
import { AxiosResponse } from 'axios';
import FloatAddButton from '../../components/FloatAddButton';
import { useParams } from 'react-router-dom';



const PresenceGroupChoose = () => {
    const titleText = 'Escolha de datas';

    const [call, setCall] = useState<AxiosResponse | null | void>(null);
    
    const params = useParams<any>();

    useEffect(() => {
        const asyncCall = async () => {
            const result = await AttendanceDates(params.id)

            setCall(result)
        };

        asyncCall();
    }, [])

    const noData = "Não existem dados :)";

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/presencegroup"} />
            <Container>
                {call?.data.length === 0 && <h2>{noData}</h2>}
                {call?.data.map((prop: any, index: number) =>
                    <UserCard key={index} id={params.id} value={prop} />
                )}
            </Container>
            <FloatAddButton url={`/presenceGroup/presence/${params.id}`}/>
        </>
    );
};

export default PresenceGroupChoose;