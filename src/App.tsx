import React from "react";
import { Test } from "@/Components";

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  const { name, wrong } = props;
  return (
    <div className="app">
      <span>{`Hello!dadwad Iddd'm ${name}, ${wrong} years old.`}</span>
    </div>
  );
}

export default App;
