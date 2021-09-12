import { Container } from './styles';

import Header from '../../components/Header';
import DropDown from '../../components/DropDown';
import ContainerComponent from './components/Container';
import ContentComponent from './components/Content';
import TitleCard from '../../pages/Presence/components/TitleCard';

import { CheckValues } from '../../models/enums';
import { IReportsPerDate } from '../../models/interfaces';

const ReportsPerDate = () => {
    const data: IReportsPerDate[] = [
        {
            "title": "22/08/2021",
            "content": [
                {
                    "name": "Everson Oliveira",
                    "nickname": "Preto",
                    "status": CheckValues.CheckValue,
                },
                {
                    "name": "Filipe Eduardo Regis",
                    "nickname": "Regis",
                    "status": CheckValues.NotCheckValue,
                },
                {
                    "name": "Filipe Eduardo Regis",
                    "nickname": "",
                    "status": CheckValues.CheckValue,
                },
                {
                    "name": "Edison Henrique Andreassy",
                    "nickname": "Henrique",
                    "status": CheckValues.CheckValue,
                }
            ]
        },
        {
            "title": "16/08/2021",
            "content": [
                {
                    "name": "Everson Oliveira",
                    "nickname": "Preto",
                    "status": CheckValues.CheckValue,
                },
                {
                    "name": "Filipe Eduardo Regis",
                    "nickname": "Regis",
                    "status": CheckValues.NotCheckValue,
                },
                {
                    "name": "Filipe Eduardo Regis",
                    "nickname": "",
                    "status": CheckValues.CheckValue,
                }
            ]
        },
        {
            "title": "10/08/2021",
            "content": [
                {
                    "name": "Everson Oliveira",
                    "nickname": "Preto",
                    "status": CheckValues.CheckValue,
                },
                {
                    "name": "Filipe Eduardo Regis",
                    "nickname": "Regis",
                    "status": CheckValues.NotCheckValue,
                },
                {
                    "name": "Filipe Eduardo Regis",
                    "nickname": "",
                    "status": CheckValues.CheckValue,
                }
            ]
        },
    ]

    const titleText = 'Relatório por data';

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/report"} />
            <Container>
            <TitleCard firstLine="Turma 20hrs" secondLine="Segunda e Quarta"/>
                {data.map((value, index) =>
                    <DropDown key={index}
                        containerChildren={
                            <ContainerComponent title={value.title} />
                        }
                        contentChildren={
                            <ContentComponent title={value.title} content={value.content} />
                        } />
                )}
            </Container>
        </>
    );
};

export default ReportsPerDate;