import { useState, useContext } from 'react';

import Image from '../../../../assets/photo.jpg';
import Check from '../../../../assets/bx-check.svg';
import NotCheck from '../../../../assets/bx-x.svg';

import { Container, PhotoArea, Photo, Name, ControlArea } from './styles';
import { theme } from '../../../../styles/theme';

import CheckIcon from '../../../../components/CheckIcon';

import { CheckValues } from '../../../../models/enums';
import { IUserCard } from '../../../../models/interfaces';

import { Users } from '../../../../context/Presence';

const UserCard: React.FC<IUserCard> = ({ value }) => {
    const context = useContext(Users);

    const [isCheckActive, SetIsCheckActive] = useState(false);
    const [isNotCheckActive, SetIsNotCheckActive] = useState(false);

    const setActive = (checkValue: number, setActive: React.Dispatch<React.SetStateAction<boolean>>, setNotActive: React.Dispatch<React.SetStateAction<boolean>>) => {
        setActive(true);
        setNotActive(false);

        context.find(x => x.id === value.id)!.value = checkValue;
    }

    return (
        <Container>
            <PhotoArea>
                <Photo src={Image} />
                <Name>{value.name}</Name>
            </PhotoArea>
            <ControlArea>
                <CheckIcon
                    onClick={() => setActive(CheckValues.CheckValue, SetIsCheckActive, SetIsNotCheckActive)}
                    color={theme.colors.primaryGreen}
                    active={isCheckActive}
                    icon={Check} />
                <CheckIcon
                    onClick={() => setActive(CheckValues.NotCheckValue, SetIsNotCheckActive, SetIsCheckActive)}
                    color={theme.colors.primaryRed}
                    active={isNotCheckActive}
                    icon={NotCheck} />
            </ControlArea>
        </Container>
    );
};

export default UserCard;