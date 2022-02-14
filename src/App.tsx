import React from "react";
import { Test } from "./components";

interface IProps {
  name: string;
}

function App(props: IProps) {
  const { name } = props;
  return (
    <div className="app">
      <Test />
      <span>{`Hello!dadwad dsdasIddd'm ${name},  dddyears old.`}</span>
    </div>
  );
}

export default App;
