import React from 'react'
// import Login from './Login'
// import Home from './Home'
export default function App2(props) {
//   if(props.user=="" ){
//     return <Login />
//   }
//   else{
//     return <Home user={props.user} />
//   }

//using twernary operator
// return (props.user === "" ? <Login /> : <Home user={props.user} />)  

// return (props.user === "" ?
 
// <>
// <h1>Login form</h1>
// <p><input typeof='text' placeholder='Name'></input></p>
// <p><input typeof='password' placeholder='Password'></input></p>
// <p><button>Login</button></p>
// </>
//  :
//  <div>Hello {props.user}</div>
//  )  

// }

// using logical operators
return (props.user === "" && 
<>
<h1>Login form</h1>
<p><input typeof='text' placeholder='Name'></input></p>
<p><input typeof='password' placeholder='Password'></input></p>
<p><button>Login</button></p>
</>
)
}

