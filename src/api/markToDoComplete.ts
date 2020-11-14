import { api } from "./api";

export const markToDoComplete = async (
  taskId: number
): Promise<boolean | void> => {
  try {
    const response = await api.delete("/tasks", { params: { taskId } });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
