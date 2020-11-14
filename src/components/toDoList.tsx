import React, { useEffect, useState } from "react";
import { getAllTodDos } from "api";
import { ToDo } from "types";
import { ToDoItem } from "./toDoItem";
import { NewToDoEditor } from "./newToDoEditor";
import { atLeastOneToDoChanged } from "../utils";

const FIVE_MINUTES_IN_MILLISECONDS = 1000 * 60 * 5;
const TEN_SECONDS_IN_MILLISECONDS = 1000 * 10;

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

  const activeToDos = filterOutCompletedMoreThan5MinutesAgo(toDos);
  const sortedActiveToDos = sortToDos(activeToDos);
  return (
    <>
      <NewToDoEditor
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

const filterOutCompletedMoreThan5MinutesAgo = (toDos: ToDo[]) =>
  toDos.filter(
    (toDo) =>
      !toDo.deletedAt ||
      new Date().getTime() - new Date(toDo.deletedAt).getTime() <=
        FIVE_MINUTES_IN_MILLISECONDS
  );

const sortToDos = (toDos: ToDo[]) =>
  toDos
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .sort((a, b) =>
      a.deletedAt ? (b.deletedAt ? 0 : 1) : b.deletedAt ? -1 : 0
    );
export { ToDoList };
