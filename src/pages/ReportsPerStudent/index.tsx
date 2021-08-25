import { Container } from './styles';

import Header from '../../components/Header';
import DropDown from '../../components/DropDown';
import ContainerComponent from './components/Container';
import ContentComponent from './components/Content';

import { CheckValues, BandColor } from '../../models/enums';
import { IReportPerStudentContainerProps } from '../../models/interfaces';

const ReportsPerStudent = () => {
    const data: IReportPerStudentContainerProps[] = [
        {
            "color": BandColor.White,
            "nextColor": BandColor.Blue,
            "name": "Everson Oliveira",
            "nickname": "Preto",
            "size": "30%",
            "presenceMonth": 30,
            "presenceTotal": 147,
            "awayMonth": 1,
            "awayTotal": 47,
            "content": [
                {
                    "day": "13/07/2021",
                    "status": CheckValues.CheckValue
                },
                {
                    "day": "16/07/2021",
                    "status": CheckValues.NotCheckValue
                }
            ],
        },
        {
            "color": BandColor.Blue,
            "nextColor": BandColor.Purple,
            "name": "Everson Oliveira",
            "nickname": "Preto",
            "size": "70%",
            "presenceMonth": 30,
            "presenceTotal": 147,
            "awayMonth": 1,
            "awayTotal": 47,
            "content": [
                {
                    "day": "13/07/2021",
                    "status": CheckValues.CheckValue
                },
                {
                    "day": "16/07/2021",
                    "status": CheckValues.NotCheckValue
                }
            ],
        },
        {
            "color": BandColor.Purple,
            "nextColor": BandColor.Brown,
            "name": "Everson Oliveira",
            "nickname": "Preto",
            "size": "50%",
            "presenceMonth": 30,
            "presenceTotal": 147,
            "awayMonth": 1,
            "awayTotal": 47,
            "content": [
                {
                    "day": "13/07/2021",
                    "status": CheckValues.CheckValue
                },
                {
                    "day": "16/07/2021",
                    "status": CheckValues.NotCheckValue
                }
            ],
        },
        {
            "color": BandColor.Brown,
            "nextColor": BandColor.Black,
            "name": "Everson Oliveira",
            "nickname": "Preto",
            "size": "90%",
            "presenceMonth": 30,
            "presenceTotal": 147,
            "awayMonth": 1,
            "awayTotal": 47,
            "content": [
                {
                    "day": "13/07/2021",
                    "status": CheckValues.CheckValue
                },
                {
                    "day": "16/07/2021",
                    "status": CheckValues.NotCheckValue
                }
            ],
        },
        {
            "color": BandColor.Black,
            "nextColor": BandColor.Red,
            "name": "Everson Oliveira",
            "nickname": "Preto",
            "size": "100%",
            "presenceMonth": 30,
            "presenceTotal": 147,
            "awayMonth": 1,
            "awayTotal": 47,
            "content": [
                {
                    "day": "13/07/2021",
                    "status": CheckValues.CheckValue
                },
                {
                    "day": "16/07/2021",
                    "status": CheckValues.NotCheckValue
                }
            ],
        },
    ]

    const titleText = 'Relatório por aluno';

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/report"} />
            <Container>
                {data.map((value, index) =>
                    <DropDown key={index}
                        containerChildren={
                            <ContainerComponent student={value} />
                        }
                        contentChildren={
                            <ContentComponent student={value} />
                        } />
                )}
            </Container>
        </>
    );
};

export default ReportsPerStudent;