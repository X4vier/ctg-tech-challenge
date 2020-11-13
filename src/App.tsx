import React from "react";
import { Center, ToDoList, Header } from "components";

import "./App.css";

const App = () => {
  return (
    <Center style={{ width: "100%", height: "100vh", flexDirection: "column" }}>
      <Header />
      <ToDoList />
    </Center>
  );
};

export default App;
