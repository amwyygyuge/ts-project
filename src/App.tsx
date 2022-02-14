import React, { lazy, Suspense } from "react";
import { Button } from "antd";
// import { Test } from "./components";
import { Test } from "@/Components/index";
import path from "../assets/test.jpg";

interface IProps {
  name: string;
}

const LazyComponent = lazy(
  () => import("./components/LazyComponent/LazyComponent")
);
function App(props: IProps) {
  const { name } = props;
  return (
    <div className="app">
      <Test />
      <span>{`Hello!dadwad dsdasIddd'm ${name},  ${name}}dddyears old.`}</span>
      <Button
        onClick={() => {
          throw Error("sss");
        }}
        type="primary"
      >
        Button
      </Button>
      <image href={path} />
      <Suspense fallback={<div>loding</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
