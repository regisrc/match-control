import { Container, Description, Date } from './styles';

interface ITitleCard {
    firstLine: string;
    secondLine: string;
}

const TitleCard = ({firstLine, secondLine} : ITitleCard) => {
    return (
        <Container>
            <Description>{firstLine}</Description>
            <Date>{secondLine}</Date>
        </Container>
    );
};

export default TitleCard;