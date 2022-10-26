// child props
import React from 'react'

const Bye = (props) => {
    // const Bye = ({children}) => {
    const style = {
        color:"pink",
        fontSize:"50px",
        textDecoration:"underline"
    }
  return (
    <div>
        <h1 style={style}>bye {props.children}</h1>
    </div>
  )
}

export default Bye
