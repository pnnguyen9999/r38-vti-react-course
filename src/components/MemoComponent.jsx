import React, { memo, useCallback, useMemo, useState } from "react";

export default function MemoComponent() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const complex = () => {
    let sum = 10;
    let res = Math.pow(sum, 10);
    console.log({ complexRes: res });
    return res;
  };

  const complexFunction = () => {
    let sum = 10;
    let res = Math.pow(sum, 12);
    console.log({ complexFunction: res });
  };

  const res = useMemo(() => complex(), []);

  const memoFunc = useCallback(() => complexFunction(), []);

  const increase = () => {
    setCounter2((prev) => ++prev);
  };
  return (
    <div>
      {counter2}
      <button onClick={increase}>click</button>
      <TestComp func={res} />
    </div>
  );
}

const TestComp = memo(function TestComponent(props) {
  console.log("re-render test comp");
  return <div>Test component</div>;
});
