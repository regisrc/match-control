import { Container, StudentContainer, Row, NameArea, Value, IconContainer, Icon, Line } from './styles';

import Check from '../../../../assets/bx-check.svg';
import NotCheck from '../../../../assets/bx-x.svg';

import { CheckValues } from '../../../../models/enums';
import { IReportsPerDate } from '../../../../models/interfaces';

import { theme } from '../../../../styles/theme';

const ContentComponent = ({ content }: IReportsPerDate) => {
    const presenceText = "Presenças";
    const awayText = "Faltas";

    return (
        <Container>
            {content.map((value, index) =>
                <StudentContainer key={index}>
                    <Row>
                        <NameArea>
                            <Value>{value.name}</Value>
                            {value.nickname.length > 1 && <b><Value>{value.nickname}</Value></b>}
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
                <Value>
                    {presenceText}
                </Value>
                <Value>
                    {content.filter(x => x.status === CheckValues.CheckValue).length}
                </Value>
            </Row>
            <Row>
                <Value>
                    {awayText}
                </Value>
                <Value>
                    {content.filter(x => x.status === CheckValues.NotCheckValue).length}
                </Value>
            </Row>
        </Container>
    );
};

export default ContentComponent;