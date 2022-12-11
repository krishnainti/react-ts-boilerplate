import { axiosInstance } from "Services";

export const getUsers = () => axiosInstance.get("/users");

export const getUser = (id: string) => axiosInstance.get(`/users/${id}`);
