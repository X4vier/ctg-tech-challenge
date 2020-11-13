import React from "react";
import { Center, ToDoList } from "components";

import "./App.css";

const App = () => {
  return (
    <Center style={{ width: "100%", height: "100vh" }}>
      <ToDoList />
    </Center>
  );
};

export default App;
