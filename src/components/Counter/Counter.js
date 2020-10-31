import React from "react";

import { useContextProvider } from "../Context";

function Counter() {
  const { value, setValue } = useContextProvider();
  const count = value?.count;

  return (
    <div>
      <span>
        <b>Count: </b>
        {count}
      </span>
      <br />

      <button onClick={() => setValue(count <= 0 ? { count: 0 } : { count: count - 1 })}>Decrement</button>
      <button onClick={() => setValue({ count: count + 1 })}>Increment</button>
      <hr />
    </div>
  );
}

export default Counter;
