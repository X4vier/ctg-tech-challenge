import { api } from "./api";
import { ToDo } from "types";

export const getAllTodDos = async (): Promise<ToDo[] | void> => {
  try {
    const response = await api.get("/tasks/");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
