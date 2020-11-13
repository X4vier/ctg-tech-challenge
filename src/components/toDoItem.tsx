import React, { CSSProperties, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";
import { markToDoComplete } from "api";
interface Props {
  title: string;
  body: string;
  id: number;
}

const ToDoItem = ({ title, body, id }: Props) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) {
      markToDoComplete(id).then((result) => {
        if (!result) setCompleted(false);
      });
    }
  }, [completed]);

  return (
    <div style={styles.outerContainer}>
      <div style={{ opacity: completed ? 0.5 : 1, ...styles.toDoCard }}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.body}>{body}</p>
      </div>
      <button style={styles.button} onClick={() => setCompleted(true)}>
        <FontAwesomeIcon
          icon={completed ? faCheckSquare : faSquare}
          style={styles.icon}
        />
      </button>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  outerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  toDoCard: {
    width: 300,
    backgroundColor: "#34b7eb",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 0,
    margin: 0,
  },
  body: {
    fontSize: 14,
    padding: 0,
    margin: 0,
  },
  icon: {
    width: 40,
    height: 40,
    cursor: "pointer",
  },
  button: {
    background: "transparent",
    border: "none",
    outline: "none",
    margin: 20,
  },
};

export { ToDoItem };
