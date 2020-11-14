import { difference } from "lodash";
import { ToDo } from "types";

const atLeastOneToDoChanged = (oldTodDos: ToDo[], newToDos: ToDo[]) => {
  return (
    Boolean(
      difference(
        oldTodDos.map((t) => t.$loki),
        newToDos.map((t) => t.$loki)
      ).length
    ) ||
    Boolean(
      difference(
        oldTodDos.map((t) => t.deletedAt),
        newToDos.map((t) => t.deletedAt)
      ).length
    )
  );
};

export { atLeastOneToDoChanged };
