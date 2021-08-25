import { Container, UserArea, NameArea, ConquestArea, NextArea, Value, PhotoContainer, Photo, Bold } from './styles';

import Image from '../../../../assets/photo.jpg';

import { IReportPerStudentContainerProp } from '../../../../models/interfaces';

const ContainerComponent = ({ student }: IReportPerStudentContainerProp) => {

    return (
        <Container>
            <PhotoContainer backgroundColor={student.color}>
                <Photo src={Image} />
            </PhotoContainer>
            <UserArea>
                <NameArea>
                    <Value>{student.name}</Value>
                    {student.nickname.length > 1 && <Bold><Value>{student.nickname}</Value></Bold>}
                </NameArea>
                <ConquestArea color={student.color}>
                    <NextArea color={student.nextColor} size={student.size} />
                </ConquestArea>
            </UserArea>
        </Container>
    );
};

export default ContainerComponent;