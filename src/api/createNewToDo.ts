import { ToDo } from "types";
import { api } from "./api";

export const createNewToDo = async (
  title: string,
  body: string
): Promise<ToDo | void> => {
  try {
    const response = await api.post("/tasks", { title, body });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
