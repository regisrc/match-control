import { ILogin } from '../../../models/interfaces';
import api from '../../index';

export const PostLogin = async (
    params : ILogin
  ) => {
    return await api.post(
      `/User/authenticate`,
      params,
    );
  };
