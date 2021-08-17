import { Container, Icon } from './styles';

interface IUserCardProps {
    onClick: React.MouseEventHandler<HTMLElement>;
    color: string;
    active: boolean;
    icon: string;
}

const UserCard = ({onClick, color, active, icon}: IUserCardProps) => {
    return (
        <Container onClick={onClick} color={color} active={active}>
            <Icon src={icon} />
        </Container>
    );
};

export default UserCard;