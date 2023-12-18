import React, { useState } from "react";

export default function Mouse(props) {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMouseLocation({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      Mouse Test Render Props
      {props.render(mouseLocation)}
    </div>
  );
}
