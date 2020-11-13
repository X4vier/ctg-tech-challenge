import React, { useEffect, useState } from "react";
import { getAllTodDos } from "api";
import { ToDo } from "types";
import { ToDoItem } from "./toDoItem";

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
      {toDos.map(({ body, title }) => (
        <ToDoItem title={title} body={body} />
      ))}
    </>
  );
};

export { ToDoList };
