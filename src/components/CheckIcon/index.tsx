import { useState } from 'react';

import { Container, Icon } from './styles';

import { CheckValues } from '../../models/enums';

interface IUserCardProps {
    color: string,
    checkValue: number,
    icon: string
}

const UserCard: React.FC<IUserCardProps> = ({color, checkValue, icon}) => {
    const [iconValue, setIconValue] = useState(CheckValues.DefaultValue);

    const UpdateActive = (value: number) => {
        iconValue === CheckValues.DefaultValue || iconValue !== value ? setIconValue(value) : setIconValue(CheckValues.DefaultValue);
    }

    return (
        <Container onClick={() => UpdateActive(checkValue)} color={color} active={iconValue === checkValue}>
            <Icon src={icon} />
        </Container>
    );
};

export default UserCard;