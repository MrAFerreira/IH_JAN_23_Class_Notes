import React, { useState, useEffect } from 'react';
let a = true;

function Counter() {
  //useState only happens on the mounting phase
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  //useEffect(function, dependencyArray)
  //useEffect(() => {}, [] )

  useEffect(() => {
    console.log('Mounting phase');
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    //we can return another function inside the function we pass to useEffect
    //this function will only run when the component is unmounted
    return () => {
      console.log('unmounting');
      clearInterval(intervalId);
    };

    //With an empty dependency array this function will only trigger on the mounting phase
  }, []);

  useEffect(() => {
    document.title = count;

    //dependency array with something inside will listen to any changes on that variables and trigger the function
  }, [count]);

  return (
    <div>
      <h2>Counter / Timer </h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
