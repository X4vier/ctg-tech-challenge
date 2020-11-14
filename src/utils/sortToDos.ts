import { ToDo } from "types";

export const sortToDos = (toDos: ToDo[]) =>
  toDos
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .sort((a, b) =>
      a.deletedAt ? (b.deletedAt ? 0 : 1) : b.deletedAt ? -1 : 0
    );
