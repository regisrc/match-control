import { useState, useEffect } from 'react';

import Header from '../../components/Header';

import UserCard from './components/UserCard';

import { Container } from './styles';

import { GetGroup } from '../../api/controllers/Group'
import { AxiosResponse } from 'axios';

const PresenceGroupChoose = () => {
    const titleText = 'Escolha de turmas';

    const [call, setCall] = useState<AxiosResponse | null | void>(null);

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetGroup()

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
                    <UserCard key={index} value={prop} />
                )}
            </Container>
        </>
    );
};

export default PresenceGroupChoose;