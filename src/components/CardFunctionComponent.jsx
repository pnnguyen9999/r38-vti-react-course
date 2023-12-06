import React, { useEffect, useState } from "react";
import CardClassComponent from "./CardClassComponent";

export default function CardFunctionComponent(props) {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log({ count });
  }, [count]);
  return (
    <div>
      {count}
      <button onClick={handleCounter}>Increase</button>
      <h1>Tên: {props.name}</h1>
      <h3>Tuổi: {props.age}</h3>
      <h3>Lớp: {props.grade}</h3>
      <h3>Huy hiệu: {props.badge}</h3>
      {props.children}
      <hr />
      <CardClassComponent name={count} />
    </div>
  );
}
