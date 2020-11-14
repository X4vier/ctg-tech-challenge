import { ToDo } from "types";
const FIVE_MINUTES_IN_MILLISECONDS = 5 * 60 * 1000;

export const removeToDosCompletedMoreThan5MinutesAgo = (toDos: ToDo[]) =>
  toDos.filter(
    (toDo) =>
      !toDo.deletedAt ||
      new Date().getTime() - new Date(toDo.deletedAt).getTime() <=
        FIVE_MINUTES_IN_MILLISECONDS
  );
