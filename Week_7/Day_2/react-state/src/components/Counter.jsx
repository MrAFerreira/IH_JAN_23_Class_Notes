import React, { useState } from 'react';
//Hook

function Counter() {
  //Creating state
  // On usestate the first value is the name of the state variable
  // The second value is the update function
  //inside the parenthesis we declare the initialValue

  const [count, setCount] = useState(0);

  //console.log(count);

  return (
    <div>
      <h2>State and hooks</h2>
      <p>Count is {count}</p>

      {/*      setCount(count - 1)
      setCount((previousCount) => previousCount - 1) */}

      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default Counter;
