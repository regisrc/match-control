import api from '../../index';
import { INewsNotification } from '../../../models/interfaces';

export const GetNews = async () => {
    return await api.get(
      `/News`
    );
  };

  export const PostNews = async (params: INewsNotification) => {
    return await api.post(
      `/News`,
      params
    );
  };

  export const DeleteNews = async (id: number) => {
    return await api.delete(
      `/News/${id}`
    );
  };