import React from "react";
// import { Test } from "@/Components/";

interface IProps {
  name: string;
}
function App(props: IProps) {
  const { name } = props;
  return (
    <div className="app">
      <span>{`Hello!dadwad Iddd'm ${name},  years old.`}</span>
    </div>
  );
}

export default App;
