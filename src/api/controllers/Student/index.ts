import { IStudent } from '../../../models/interfaces';
import api from '../../index';

export const SaveStudent = async (
    params : IStudent
  ) => {
    return await api.post(
      `/api/Student`,
      params,
    );
  };