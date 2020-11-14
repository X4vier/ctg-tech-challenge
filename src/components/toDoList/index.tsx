import React, { useEffect, useState } from "react";
import { getAllTodDos } from "api";
import { ToDo } from "types";
import { ToDoItem } from "./toDoItem";
import { ToDoEditor } from "components";
import {
  atLeastOneToDoChanged,
  removeToDosCompletedMoreThan5MinutesAgo,
  sortToDos,
} from "utils";

const TEN_SECONDS_IN_MILLISECONDS = 10 * 1000;

const ToDoList = () => {
  const [toDos, setToDos] = useState<Array<ToDo>>([]);

  const refetchData = () => {
    getAllTodDos().then((updatedToDos) => {
      if (updatedToDos) {
        if (atLeastOneToDoChanged(updatedToDos, toDos)) {
          setToDos(updatedToDos);
        }
      } else {
        alert("There was an error connecting to the ToDo server");
      }
    });
  };

  useEffect(refetchData, []);
  // Refetch data every 10 seconds
  useEffect(() => {
    const interval = setInterval(refetchData, TEN_SECONDS_IN_MILLISECONDS);
    return () => clearInterval(interval);
  }, []);

  const activeToDos = removeToDosCompletedMoreThan5MinutesAgo(toDos);
  const sortedActiveToDos = sortToDos(activeToDos);

  return (
    <>
      <ToDoEditor
        toDoCreatedCallback={(newToDo: ToDo) => setToDos([newToDo, ...toDos])}
      />
      {sortedActiveToDos.map(({ body, title, $loki, createdAt, deletedAt }) => (
        <ToDoItem
          title={title}
          body={body}
          id={$loki}
          key={$loki}
          createdAt={createdAt}
          deletedAt={deletedAt}
          refreshData={refetchData}
        />
      ))}
    </>
  );
};

export { ToDoList };
