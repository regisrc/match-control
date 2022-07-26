import { IAttendance, IModality, IDateAttendance } from '../../../models/interfaces';
import api from '../../index';

export const SaveGroup = async (
    params : IModality
  ) => {
    return await api.post(
      `/Group`,
      params,
    );
  };

export const GetGroup = async () => {
    return await api.get(
      `/Group`
    );
  };

  export const GetOneGroup = async (id: number) => {
    return await api.get(
      `/Group/${id}`
    );
  };

  export const DeleteGroup = async (id: number) => {
    return await api.delete(
      `/Group/${id}`
    );
  };

  export const Attendance = async (params: IAttendance) => {
    return await api.post(
      `/Attendance`,
      params
    );
  };

  export const AttendanceDates = async (id: number) => {
    return await api.get(
      `/Attendance/dates/${id}`
    );
  };

  export const AttendanceGetDates = async (params: IDateAttendance) => {
    return await api.get(
      `/Attendance/${params.groupId}/${params.date}`
    );
  };