import { ITeacher } from '../../../models/interfaces';
import api from '../../index';

export const SaveTeacher = async (
    params : ITeacher
  ) => {
    return await api.post(
      `/Teacher`,
      params,
    );
  };

  export const GetTeacher = async () => {
    return await api.get(
      `/Teacher`
    );
  };

  export const GetOneTeacher = async (id: number) => {
    return await api.get(
      `/Teacher/${id}`
    );
  };

  export const PutTeacher = async (params : ITeacher, id: number) => {
    return await api.put(
      `/Teacher/${id}`, 
      params
    );
  };

  export const DeleteTeacher = async (id: number) => {
    return await api.delete(
      `/Teacher/${id}`
    );
  };