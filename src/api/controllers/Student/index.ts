import { IStudent, IStudentWithAddress } from '../../../models/interfaces';
import api from '../../index';

export const SaveStudent = async (
    params : IStudent
  ) => {
    return await api.post(
      `/Student`,
      params,
    );
  };

  export const GetStudents = async () => {
    return await api.get(
      `/Student`
    );
  };

  export const GetStudent = async (id: number) => {
    return await api.get(
      `/Student/${id}`
    );
  };

  export const PutStudent = async (params : IStudent, id: number) => {
    return await api.put(
      `/Student/${id}`, 
      params
    );
  };

  export const DeleteStudent = async (id: number) => {
    return await api.delete(
      `/Student/${id}`
    );
  };