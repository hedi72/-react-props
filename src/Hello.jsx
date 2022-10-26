import React from 'react'
import PropTypes from 'prop-types'; // ES6
const Hello = ({name,lastName,alertMe}) => {
  // const Hello = (props) => {
    // console.log(props);
    
    
  return (
    
    <div className='hello'>
       
        <h2 style={{color:"red",fontSize:"50px"}}>Hello {name} {lastName}</h2>
      <button onClick={alertMe}>click me</button>
    </div>
  )
}

Hello.defaultProps = {
  name:"nour"
} 
Hello.propTypes={
  name:PropTypes.string
}

export default Hello
