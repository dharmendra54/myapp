import React from 'react'

export default function event() {
    const handleclick = (msg) =>{
        alert(msg)
    }
  return (
    <div>
        <button onClick={()=>handleclick('hi john')}>Click</button>
    </div>
  )
}

// import React from 'react'

// export default function event() {
//     const handleclick = () =>{
//         alert("hello world")
//     }
//   return (
//     <div>
//         <button onClick={handleclick}>Click</button>
//     </div>
//   )
// }
