import { SweetAlertIcon } from 'sweetalert2';

export interface IPresenceProps {
    id: number,
    name: string;
    value: number;
    nickname: string;
}

export interface IUserCard {
    value: IPresenceProps
}

export interface IAlertType {
    icon: SweetAlertIcon;
    title: string;
}

export interface IHeaderSettings {
    title: string;
    isReturnActive: boolean;
    path?: string;
}