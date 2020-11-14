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
    <div>
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
