import { useHistory } from 'react-router-dom';
import { Container, PhotoArea, NameArea, Name } from './styles';

const UserCard = ({ value } : any) => {
    const history = useHistory();

    return (
        <Container onClick={() => history.push(`/presenceGroup/presence/${value.id}`)}>
            <PhotoArea>
                <NameArea>
                    <Name>{value.name}</Name>   
                </NameArea>
            </PhotoArea>
        </Container>
    );
};

export default UserCard;
