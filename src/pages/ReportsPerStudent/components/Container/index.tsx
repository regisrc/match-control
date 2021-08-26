import { Container, UserArea, NameArea, ConquestArea, NextArea, Value, PhotoContainer, PhotoNicknameContainer, Photo, Bold } from './styles';

import { IReportPerStudentContainerProp } from '../../../../models/interfaces';

const ContainerComponent = ({ student }: IReportPerStudentContainerProp) => {

    return (
        <Container>
            <PhotoNicknameContainer>
                <PhotoContainer backgroundColor={student.color}>
                    <Photo src={student.photo} />
                </PhotoContainer>
                {student.nickname.length > 1 && <Bold><Value>{student.nickname}</Value></Bold>}
            </PhotoNicknameContainer>
            <UserArea>
                <NameArea>
                    <Value>{student.name}</Value>
                </NameArea>
                <ConquestArea color={student.color}>
                    <NextArea color={student.nextColor} size={student.size} />
                </ConquestArea>
            </UserArea>
        </Container>
    );
};

export default ContainerComponent;