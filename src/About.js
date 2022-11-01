import React from "react";

const About = (props) => {
  return (
    <div>
      <h1>About</h1>
      {/* <button onClick={() => props.history.go(-1)}>Go Back</button> */}
      <button onClick={() => props.history.goBack()}>Go Back</button>
      {/* <button onClick={() => props.history.push("/users")}>Go Back</button> */}

      {console.log(props.history)}
    </div>
  );
};

export default About;
