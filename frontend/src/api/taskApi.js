import axiosClient from "./axiosClient";

export const fetchTasksApi = async (params) => {
  const res = await axiosClient.get("/api/tasks", { params });
  return res.data;
};

export const createTaskApi = async (payload) => {
  const res = await axiosClient.post("/api/tasks", payload);
  return res.data;
};

export const fetchTaskByIdApi = async (id) => {
  const res = await axiosClient.get(`/api/tasks/${id}`);
  return res.data;
};

export const updateTaskApi = async (id, payload) => {
  const res = await axiosClient.put(`/api/tasks/${id}`, payload);
  return res.data;
};

export const deleteTaskApi = async (id) => {
  const res = await axiosClient.delete(`/api/tasks/${id}`);
  return res.data;
};