import React from 'react'

export default function App5() {
    let names = ["john","mike","kat"]
  return (
    <ul>
        {names.map((e,i)=>(
            <li key={i}>{e}</li>
        ))}
    </ul>
  )
}
