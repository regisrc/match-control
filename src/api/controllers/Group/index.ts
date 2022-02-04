import { IAttendance, IModality } from '../../../models/interfaces';
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
      `/Group/attendance`,
      params
    );
  };