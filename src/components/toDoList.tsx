import React, { useEffect, useState } from "react";
import { getAllTodDos } from "api";
import { ToDo } from "types";
import { ToDoItem } from "./toDoItem";
import { NewToDoButton } from "./newToDoButton";

const ToDoList = () => {
  const [toDos, setToDos] = useState<Array<ToDo>>([]);

  useEffect(() => {
    getAllTodDos().then((toDos) => {
      if (toDos) {
        setToDos(toDos);
      }
    });
  }, []);

  return (
    <>
      <NewToDoButton />
      {toDos.map(({ body, title, $loki }) => (
        <ToDoItem title={title} body={body} id={$loki} key={$loki} />
      ))}
    </>
  );
};

export { ToDoList };
