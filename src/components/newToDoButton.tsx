import React, { CSSProperties, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { NewToDoForm } from "./newToDoForm";
const NewToDoButton = () => {
  const [editorVisible, setEditorVisible] = useState(false);

  return (
    <div>
      {editorVisible ? (
        <NewToDoForm />
      ) : (
        <button style={styles.button} onClick={() => setEditorVisible(true)}>
          {"Create new to-do "}
          <FontAwesomeIcon icon={faPlusSquare} style={styles.icon} />
        </button>
      )}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  button: {
    backgroundColor: "#42f57b",
    outline: "none",
    border: "none",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
};

export { NewToDoButton };
