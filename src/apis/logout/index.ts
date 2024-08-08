import axiosInstance from "../config/axois.config";

export const logout = async (url: string) => {
    const token = JSON.parse(`${localStorage.getItem("jwt")}`);
    try {
      const response = await axiosInstance.post(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return err;
    }
};