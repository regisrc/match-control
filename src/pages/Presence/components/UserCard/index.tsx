import { useState, useContext } from 'react';

import Image from '../../../../assets/photo.jpg';
import Check from '../../../../assets/bx-check.svg';
import NotCheck from '../../../../assets/bx-x.svg';

import { Container, PhotoArea, Photo, NameArea, Name, ControlArea } from './styles';
import { theme } from '../../../../styles/theme';

import CheckIcon from '../../../../components/CheckIcon';

import { CheckValues } from '../../../../models/enums';

import { Users } from '../../../../context/Presence';

const UserCard = ({ value } : any) => {
    const context = useContext(Users);

    const [isCheckActive, SetIsCheckActive] = useState(value.present === CheckValues.CheckValue);
    const [isNotCheckActive, SetIsNotCheckActive] = useState(value.present === CheckValues.NotCheckValue);

    const setActive = (checkValue: number, setActive: React.Dispatch<React.SetStateAction<boolean>>, setNotActive: React.Dispatch<React.SetStateAction<boolean>>) => {
        setActive(true);
        setNotActive(false);

        console.log(checkValue === CheckValues.CheckValue)
        value.present = checkValue === CheckValues.CheckValue;
    }

    return (
        <Container>
            <PhotoArea>
                {/* <Photo src={Image} /> */}
                <NameArea>
                    <Name>{value.name}</Name>
                    {/* {value.nickname.length > 1 && <b><Name>{value.nickname}</Name></b>} */}
                </NameArea>
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