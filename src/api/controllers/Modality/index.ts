import { IModality } from '../../../models/interfaces';
import api from '../../index';

export const SaveModality = async (
    params : IModality
  ) => {
    return await api.post(
      `/Modality`,
      params,
    );
  };

  export const UpdateModality = async (
    id: number,
    params : IModality
  ) => {
    return await api.put(
      `/Modality/${id}`,
      params,
    );
  };


export const GetModality = async () => {
    return await api.get(
      `/Modality`
    );
  };

  export const GetOneModality = async (id: number) => {
    return await api.get(
      `/Modality/${id}`
    );
  };

  export const DeleteModality = async (id: number) => {
    return await api.delete(
      `/Modality/${id}`
    );
  };