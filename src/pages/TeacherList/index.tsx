import { useEffect, useState } from 'react';
import { AxiosResponse } from "axios";

import { Container } from './styles';

import Header from '../../components/Header';
import DropDown from '../../components/DropDown';
import ContainerComponent from './components/Container';
import ContentComponent from './components/Content';

import { GetTeacher } from '../../api/controllers/Teacher';

import FloatAddButton from '../../components/FloatAddButton';

const TeacherList = () => {
    const titleText = 'Listagem de professores';

    const [call, setCall] = useState<AxiosResponse | null | void>(null);

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetTeacher()

            setCall(result)
        };

        asyncCall();
    }, [])

    const noData = "Não existem dados :)";

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/list"} />
            <Container>
                {call?.data.length === 0 && <h2>{noData}</h2>}
                {call?.data.map((value: any, index: number) =>
                    <DropDown key={index}
                        containerChildren={<ContainerComponent objeto={value} />}
                        contentChildren={<ContentComponent objeto={value} />} />
                )}
            </Container>
            <FloatAddButton url={'/registration/teacher'} />
        </>
    );
}

export default TeacherList;