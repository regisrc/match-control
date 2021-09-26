import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
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

export interface IDropDownProps {
    containerChildren: React.ReactNode;
    contentChildren: React.ReactNode;
} 

export interface INewsContainerProps {
    title: string;
    photo: string;
}

export interface INewsContentProps {
    title: string;
}

export interface IReportPerDateContainerProps {
    title: string;
}

export interface IReportsPerDate {
    title: string;
    content: IReportsPerDateStudents[];
}

export interface IReportsPerDateStudents {
    name: string;
    nickname: string;
    status: number;
}

export interface IReportPerStudentContainerProp {
    student: IReportPerStudentContainerProps;
}

export interface IReportPerStudentContainerProps {
    color: string;
    nextColor: string;
    size: string;
    name: string;
    nickname: string;
    photo: string;
    presenceMonth: number;
    presenceTotal: number;
    awayMonth: number;
    awayTotal: number;
    content: IReportPerStudentContentProps[];
}

export interface IReportPerStudentContentProps {
    day: string;
    status: number;
}

export interface IMenuComponentProps {
    title: string;  
    returnActive: boolean;
    path: string;
    buttons: Array<IMenuComponentButtons>;
}

export interface IMenuComponentButtons {
    title: string;
    path: string;
    icon: OverridableComponent<SvgIconTypeMap>;
}

export interface IStudent {
    id: number;
    name: string;
    nickname: string;
    birthdate: string;
    cpf: string;
    email: string;
    phone: string;
}