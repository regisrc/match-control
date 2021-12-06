import { IModality } from '../../../models/interfaces';
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

  export const DeleteGroup = async (id: number) => {
    return await api.delete(
      `/Group/${id}`
    );
  };