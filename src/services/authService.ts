import type { RegisterInterface } from "../interface/registerInterface";
import { axiosInstance } from "./axiosInstance";
import { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const loginApi = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axiosInstance.post(BASE_URL + '/auth/login', { email, password });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(err.response?.data?.message || 'Login failed');
  }
};


export const registerApi = async (formData: RegisterInterface): Promise<any> => {
  const response = await axiosInstance.post(BASE_URL + '/auth/register', formData);
  return response.data;
};

