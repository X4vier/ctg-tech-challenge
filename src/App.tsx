import React from "react";
import { Center, ToDoList, Header } from "components";

const App = () => {
  return (
    <Center
      style={{ width: "100%", minHeight: "100vh", flexDirection: "column" }}
    >
      <Header />
      <ToDoList />
    </Center>
  );
};

export default App;
