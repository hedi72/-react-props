import React from "react";
import { useState } from "react";

const PersonF = (props) => {
  // const PersonF = ({handlePersonAdd}) => {
  const [newPerson, setNewPerson] = useState({
    nom: "",
    age: "",
    profession: "",
  });
  const handleChange = (e) =>
    setNewPerson({
      ...newPerson,
      [e.target.name]: e.target.value,
    });
  return (
    <div>
      <label htmlFor="name">Name:</label>{" "}
      <input id="name" name="name" type="text" onChange={handleChange}></input>
      <label htmlFor="age">Age:</label>{" "}
      <input id="age" name="age" type="text" onChange={handleChange}></input>
      <label htmlFor="profession">Profession:</label>{" "}
      <input
        id="profession"
        name="profession"
        type="text"
        onChange={handleChange}
      ></input>
      <button onClick={() => props.handlePersonAdd(newPerson)}>Add</button>
      <div>
        <p>{newPerson.name}</p>
        <p>{newPerson.age}</p>
        <p>{newPerson.profession}</p>
      </div>
    </div>
  );
};

export default PersonF;
