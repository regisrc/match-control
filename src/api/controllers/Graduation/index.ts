import { IAttendance, IModality, IDateAttendance } from '../../../models/interfaces';
import api from '../../index';

export const GetGraduation = async (id: number) => {
    return await api.get(
      `/Graduation/${id}`
    );
  };

  export const GetNextGraduation = async (id: number) => {
    return await api.get(
      `/Graduation/next/${id}`
    );
  };
