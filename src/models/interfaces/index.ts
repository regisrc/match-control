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
    name: string;
    nickname: string;
    birthdate: string;
    cpf: string;
    email: string;
    phone: string;
    groups: Array<string>;
}

export interface IStudentWithAddress {
    name: string;
    nickname: string;
    birthdate: string;
    cpf: string;
    email: string;
    phone: string;
    address: IAddress;
}

export interface IAddress {
    street: string;
    number: string;
    complement: string;
    district: string;
    zipCode: string;
    city: string;
}

export interface ITeacher {
    name: string;
    nickname: string;
    birthdate: string;
    cpf: string;
    email: string;
    phone: string;
    commission: string;
}

export interface IModality {
    name: string;
}

export interface IGroup {
    name: string;
    students: Array<number>;
    teacherId: number;
    modalityId: number;
}

export interface INewsResponse {
    image: string;
    text: string;
    title: string;
    id: string;
}

export interface INewsNotification{
    userId: number;
    isHoliday: boolean;
    showDate: string;
    text: string;
    title: string;
}

export interface IAttendance {
    date: string;
    groupId: number;
    students: Array<IAttendanceStudent>
}

export interface IAttendanceStudent {
    id: number;
    present: boolean;
}