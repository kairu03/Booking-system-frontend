import { api } from "../api/axios";

export const getAllResourceByCategory = async (categoryId) => {
  const res = await api.get(`/categories/${categoryId}/resources`);
  return res.data;
}