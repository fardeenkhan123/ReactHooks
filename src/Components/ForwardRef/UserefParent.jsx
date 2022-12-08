import React, { useRef } from "react";
import ForwardrefuserefChild from "./ForwardrefuserefChild";

export const UserefParent = () => {
  const vasim = useRef(null);

  const handleADD = () => {
    vasim.current.value = "1110";
    vasim.current.style.color = "yellow";
    vasim.current.focus();
  };
  return (
    <div>
      <h1>UserefParent</h1>
      <button onClick={handleADD}>ADD</button>
      <ForwardrefuserefChild ref={vasim} />
    </div>
  );
};
