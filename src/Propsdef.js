import React from 'react'

export default function Propsdef(props) {
    // Propsdef.defaultProps = {name:"cat", age:55}
  return (
    <div style={{backgroundColor:'green', color:'red'}}>
        Hello {props.name}, You are {props.age}
    </div>
  )
}
Propsdef.defaultProps = {name:"cat", age:55}