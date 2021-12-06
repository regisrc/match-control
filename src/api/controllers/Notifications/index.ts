import api from '../../index';
import { INewsNotification } from '../../../models/interfaces';

export const GetNotifications = async () => {
    return await api.get(
      `/Notification`
    );
  };

  export const PostNotifications = async (params: INewsNotification) => {
    return await api.post(
      `/Notification`,
      params
    );
  };

  export const DeleteNotifications = async (id: number) => {
    return await api.delete(
      `/Notification/${id}`
    );
  };