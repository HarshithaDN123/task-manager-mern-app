import axiosClient from "./axiosClient";

export const loginApi = async ({ email, password }) => {
  const res = await axiosClient.post("/api/auth/login", { email, password });
  return res.data;
};

export const registerApi = async ({ name, email, password }) => {
  const res = await axiosClient.post("/api/auth/register", { name, email, password });
  return res.data;
};
