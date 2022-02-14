import React, { lazy, Suspense } from "react";
import { Test } from "./components";

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
      <span>{`Hello!dadwad dsdasIddd'm ${name},  dddyears old.`}</span>
      <Suspense fallback={<div>loding</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
