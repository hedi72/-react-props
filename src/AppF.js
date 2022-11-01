import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
// import Person from "./Person";
import PersonF from "./PersonF";

const AppF = () => {
  const [person, setPerson] = useState([]);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.log("show was modified");
  }, [show]);
  useEffect(() => {
    console.log("count was modified");
  }, [count]);

  useEffect(() => {
    console.log("count was modified");
    return () => {
      console.log("useeffect clean person");
    };
  }, []);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const handlePersonAdd = (newPerson) => {
    setPerson([...person, newPerson]);
  };
  return (
    <div className="App">
      {console.log("i am render methods")}
      {/* if else */}
      <h4>{count}</h4>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>reset</button>
      <button onClick={incrementCount}>+</button>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <hr />
      {show && <PersonF handlePersonAdd={handlePersonAdd} />}
      <hr />

      {person.map((p, i) => (
        <div key={i}>{p.nom}</div>
      ))}
    </div>
  );
};

export default AppF;
