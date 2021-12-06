import { useEffect, useState } from 'react'
import { AxiosResponse } from "axios";
import { Container, ExpansionPanelStyled, ExpansionPanelSummaryStyled, ExpansionPanelDetailsStyled } from './styles';

import Image from '../../assets/photo.jpg';
import Reward from '../../assets/reward.jpg';

import Header from '../../components/Header';
import DropDown from '../../components/DropDown';
import ContainerComponent from './components/Container'
import ContentComponent from './components/Content'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { INewsResponse } from '../../models/interfaces';

import { GetNotifications } from '../../api/controllers/Notifications';

const Notifications = () => {
    const [call, setCall] = useState<AxiosResponse | null | void>(null);

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetNotifications()

            setCall(result)
        };
    
        asyncCall();
    }, [])

    const titleText = 'Notificações';

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={""} />
            <Container>
                {call?.data.map((value: INewsResponse, index: number) =>
                    <DropDown key={index}
                        containerChildren={<ContainerComponent title={value.title} photo={value.image} />}
                        contentChildren={<ContentComponent title={value.text} />} />
                )}
            </Container>
        </>
    );
};

export default Notifications;