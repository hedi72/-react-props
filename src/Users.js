import React from "react";

const Users = (props) => {
  return (
    <div>
      {console.log("state", props.location.state.name)}
      {console.log("path", props.match.path)}
      <h1>Users : {props.location.state.name}</h1>
      <h1>Address : {props.location.state.address}</h1>
    </div>
  );
};

export default Users;
