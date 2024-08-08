import axiosInstance from "../config/axois.config";

export const deleteUser = async (url : string) => {
  const token = JSON.parse(`${localStorage.getItem("jwt")}`);
  try {
    const response = await axiosInstance.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
