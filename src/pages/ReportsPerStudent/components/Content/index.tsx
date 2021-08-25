import { Container, StudentContainer, Row, NameArea, Value, IconContainer, Icon, LineDiv, Line, ConquestArea, NextArea, ProgressContainer, ProgressTitle } from './styles';

import Check from '../../../../assets/bx-check.svg';
import NotCheck from '../../../../assets/bx-x.svg';

import { CheckValues } from '../../../../models/enums';
import { IReportPerStudentContainerProp } from '../../../../models/interfaces';

import { theme } from '../../../../styles/theme';

const ContentComponent = ({ student }: IReportPerStudentContainerProp) => {
    const presenceText = "Presenças nesse mês/total";
    const awayText = "Faltas nesse mês/total";

    return (
        <Container>
            {student.content.map((value, index) =>
                <StudentContainer key={index}>
                    <Row>
                        <NameArea>
                            <Value>{value.day}</Value>
                        </NameArea>
                        <IconContainer color={
                            value.status === CheckValues.CheckValue ?
                                theme.colors.primaryGreen :
                                theme.colors.primaryRed}>
                            <Icon src={
                                value.status === CheckValues.CheckValue ?
                                    Check :
                                    NotCheck
                            } />
                        </IconContainer>
                    </Row>
                    <Line />
                </StudentContainer>
            )}
            <Row>
                    <ProgressContainer>
                        <ProgressTitle>{`Progresso - ${student.size}`}</ProgressTitle>
                        <Value>{`Faltam ${student.presenceTotal - student.presenceMonth} aulas para estar apto a trocar de faixa`}</Value>
                    </ProgressContainer>
            </Row>
            <Row>
                <ConquestArea color={student.color}>
                    <NextArea color={student.nextColor} size={student.size} />
                </ConquestArea>
            </Row>
            <LineDiv>
                <Line />
            </LineDiv>
            <Row>
                <Value>
                    {presenceText}
                </Value>
                <Value>
                    {`${student.presenceMonth}/${student.presenceTotal}`} 
                </Value>
            </Row>
            <Row>
                <Value>
                    {awayText}
                </Value>
                <Value>
                    {`${student.awayMonth}/${student.awayTotal}`} 
                </Value>
            </Row>
            <LineDiv>
                <Line />
            </LineDiv>
            <Row>
                <Value>
                    {"Presenças"}
                </Value>
                <Value>
                    {`${((student.presenceMonth/student.presenceTotal)*100).toFixed(2)}%`} 
                </Value>
            </Row>
            <Row>
                <Value>
                    {"Faltas"}
                </Value>
                <Value>
                    {`${((student.awayMonth/student.awayTotal)*100).toFixed(2)}%`} 
                </Value>
            </Row>
        </Container>
    );
};

export default ContentComponent;