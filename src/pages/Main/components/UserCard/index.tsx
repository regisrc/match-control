import Image from '../../../../assets/photo.jpg';
import Check from '../../../../assets/bx-check.svg';
import NotCheck from '../../../../assets/bx-x.svg';

import { Container, PhotoArea, Photo, Name, ControlArea } from './styles';
import { theme } from '../../../../styles/theme';

import CheckIcon from '../../../../components/CheckIcon';

import { CheckValues } from '../../../../models/enums';
import { IUserCard } from '../../../../models/interfaces';

const UserCard: React.FC<IUserCard> = ({ value }) => {
    return (
        <Container>
            <PhotoArea>
                <Photo src={Image} />
                <Name>{value.name}</Name>
            </PhotoArea>
            <ControlArea>
                <CheckIcon color={theme.colors.primaryGreen} checkValue={CheckValues.CheckValue} icon={Check} />
                <CheckIcon color={theme.colors.primaryRed} checkValue={CheckValues.NotCheckValue} icon={NotCheck} />
            </ControlArea>
        </Container>
    );
};

export default UserCard;