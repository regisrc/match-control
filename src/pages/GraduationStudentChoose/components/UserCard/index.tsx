import { useHistory } from 'react-router-dom';
import { Container, PhotoArea, NameArea, Name, IconBlockArea, Icon } from './styles';
import IconUi from '@material-ui/icons/Block';

const UserCard = ({ value, id } : any) => {
    const history = useHistory();

    return (
        <Container>
            <PhotoArea onClick={() => history.push(`/graduation/${id}`)}>
                <NameArea>
                    <Name>{value.name} {value.nickname}</Name>   
                </NameArea>
            </PhotoArea>
        </Container>
    );
};

export default UserCard;
