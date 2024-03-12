import React, {useContext} from 'react'
import {UserContext} from "./App13a"
import Childa from "./Childa";
import Register from './Register'

export default function Login2() {
    const {flag,setFlag} = useContext(UserContext);
    if (flag == 1) {
        <Childa />
    }
    else if (flag == 2) {
        <Register/>
    }
  return (
   <>
    <div>Login2</div>
    <button onClick={() => setFlag((prevState) => 1)}>Login</button>
    <button onClick={() => setFlag((prevState) => 2)}>Create account</button>

   </>
  )
}
