import { useHistory } from 'react-router-dom';
import { Container, PhotoArea, NameArea, Name, IconBlockArea, Icon } from './styles';
import IconUi from '@material-ui/icons/Block';

const UserCard = ({ value, id } : any) => {
    const history = useHistory();

    return (
        <Container>
            <PhotoArea onClick={() => history.push(`/presenceGroup/presence/${value}/${id}`)}>
                <NameArea>
                    <Name>{value.substring(0, 10)}</Name>   
                </NameArea>
            </PhotoArea>
            <IconBlockArea onClick={() => alert('Bloqueado')}>
                    <Icon component={IconUi} />
                </IconBlockArea>
        </Container>
    );
};

export default UserCard;
