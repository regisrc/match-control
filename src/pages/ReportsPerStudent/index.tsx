import { Container } from './styles';

import Header from '../../components/Header';
import DropDown from '../../components/DropDown';
import ContainerComponent from './components/Container';
import ContentComponent from './components/Content';

import Image from '../../assets/photo.jpg';
import Image2 from '../../assets/photo2.jpeg';
import Image3 from '../../assets/photo3.jpeg';
import Image4 from '../../assets/photo4.jpeg';  
import Image5 from '../../assets/photo5.jpeg';

import { CheckValues, BandColor } from '../../models/enums';
import { IReportPerStudentContainerProps } from '../../models/interfaces';

const ReportsPerStudent = () => {
    const data: IReportPerStudentContainerProps[] = [
        {
            "color": BandColor.Black,
            "nextColor": BandColor.Black,
            "name": "Leonardo Peçanha",
            "nickname": "Peçanha",
            "photo": Image4,
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
        {
            "color": BandColor.Green,
            "nextColor": BandColor.Blue,
            "name": "Kauã Serpa",
            "nickname": "Serpa",
            "size": "70%",
            "photo": Image2,
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
            "name": "Marcos Cunha",
            "nickname": "Marquinhos",
            "photo": Image3,
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
            "color": BandColor.Black,
            "nextColor": BandColor.Black,
            "name": "Everson Oliveira",
            "nickname": "Preto",
            "photo": Image,
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
        {
            "color": BandColor.Yellow,
            "nextColor": BandColor.Orange,
            "name": "Cristiano Duarte",
            "nickname": "Dick",
            "photo": Image5,
            "size": "80%",
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
        }
    ]

    data.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    const titleText = 'Relatório por aluno';

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={"/report"} />
            <Container>
                {data.map((value, index) =>
                    <DropDown key={index}
                        containerSize={"100px"}
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