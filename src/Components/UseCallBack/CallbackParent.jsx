import React, { useCallback, useState } from "react";
// import CallbackChild from "./CallbackChild";
import CallbackChild from "./CallbackChild";

export const CallbackParent = () => {
  const [cnt, setCnt] = useState(0);
  const [cnt1, setCnt1] = useState(0);

  const Learn = useCallback(() => {}, [cnt1]);
  return (
    <div>
      <h1>CallbackParent</h1>
      <h1>{cnt}</h1>
      <button onClick={() => setCnt(cnt + 1)}>INC</button>
      <h1>{cnt1}</h1>
      <button onClick={() => setCnt1(cnt1 - 1)}>DEC</button>
      <CallbackChild Learn={Learn} />
    </div>
  );
};
