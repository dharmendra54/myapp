import React from 'react'

export default function Sqr(props) {
    let result =props.f(props.n)
  return (
   <div>square of {props.n} is{result}</div>
  )
}
