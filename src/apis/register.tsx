import { AxiosError } from "axios";
import axiosInstance from "./config/axois.config";

interface Iregister {
  username: string;
  email?: string;
  password: string;
}
export const register = async (data: Iregister, url: string) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    const error_detail = error as AxiosError;
    if (!error_detail?.response) {
      return error_detail;
    } else {
      return error_detail.response?.data;
    }
  }
};

export default register;
