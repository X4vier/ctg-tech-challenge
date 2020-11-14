import React, { CSSProperties } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

interface Props {
  onClick: () => void;
}

const NewToDoButton = ({ onClick }: Props) => (
  <button style={styles.button} onClick={onClick}>
    {"Create new to-do "}
    <FontAwesomeIcon icon={faPlusSquare} style={styles.icon} />
  </button>
);

const styles: Record<string, CSSProperties> = {
  button: {
    backgroundColor: "#42f57b",
    outline: "none",
    border: "none",
    marginBottom: 20,
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
    marginLeft: 10,
  },
};

export { NewToDoButton };
