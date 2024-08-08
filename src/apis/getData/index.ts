import { useQuery } from "react-query";
import axiosInstance from "../config/axois.config";

export const Getdata = (url: string, key: string) => {
  return useQuery(key, async () => {
    const response = await axiosInstance.get(url);
    return response.data;
  });
};
export const GetDataAuthenticated = async (url: string) => {
  const token = JSON.parse(`${localStorage.getItem("jwt")}`);
  try {
    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data?.newToken) {
      localStorage.setItem("jwt", JSON.stringify(response.data?.newToken));
    }
    return response.data;
  } catch (err) {
    return err;
  }
};
