import { api } from "./api";
import { ToDo } from "types";

export const getAllTodDos = async (): Promise<ToDo[] | void> => {
  try {
    const response = await api.get("/tasks/");
    console.log("got response!");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
