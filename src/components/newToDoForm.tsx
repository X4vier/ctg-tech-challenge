import React, { CSSProperties, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const NewToDoForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div style={styles.outerContainer}>
      <div style={styles.newToDo}>
        <input
          value={title}
          style={styles.title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Enter title here"}
        />
        <input
          value={body}
          style={styles.body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={"What needs to be done?"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button style={styles.button}>
          <FontAwesomeIcon icon={faCheck} style={styles.icon} />
        </button>
        <button style={styles.button}>
          <FontAwesomeIcon icon={faTimes} style={styles.icon} />
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  newToDo: {
    backgroundColor: "#42f57b",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    width: 300,
  },
  outerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 35,
    height: 35,
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 0,
    margin: 0,
    backgroundColor: "#42f57b",
    border: "none",
    outline: "none",
  },
  body: {
    fontSize: 14,
    padding: 0,
    margin: 0,
    backgroundColor: "#42f57b",
    border: "none",
    outline: "none",
  },
  button: { outline: "none", background: "transparent", border: "none" },
};

export { NewToDoForm };
