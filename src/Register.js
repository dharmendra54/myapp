import React from 'react'
import  {useContext} from 'react'
import {UserContext} from "./App13a"
import Childa from './Childa';

export default function Register() {
    const {flag,setFlag} = useContext(UserContext);
  return (
   <>
     <div>Register</div>
    <button onClick={() => setFlag((prevState) => 1)}>Create account</button>
   </>
  )
}
