import React, { useState } from "react";
import { NewToDoForm } from "./newToDoForm";
import { NewToDoButton } from "./newToDoButton";
import { ToDo } from "types";
interface Props {
  toDoCreatedCallback: (toDo: ToDo) => void;
}

const ToDoEditor = ({ toDoCreatedCallback }: Props) => {
  const [editorVisible, setEditorVisible] = useState(false);

  return (
    <div
      style={{
        height: 110,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 0,
        padding: 0,
      }}
    >
      {editorVisible ? (
        <NewToDoForm
          onClose={() => setEditorVisible(false)}
          toDoCreatedCallback={(toDo) => {
            toDoCreatedCallback(toDo);
            setEditorVisible(false);
          }}
        />
      ) : (
        <NewToDoButton onClick={() => setEditorVisible(true)} />
      )}
    </div>
  );
};

export { ToDoEditor };
