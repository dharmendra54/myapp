import React from 'react'
import {useState, useEffect} from 'react';

// import {useState} from 'react';

export default function Hook() {
    const [Runs, setRuns] = useState(0);
    const [Wickets, setWickets] = useState(0);
    // console.log("component")
    useEffect(() =>{
        if (Wickets>0) {
            console.log(`Wickets: ${Wickets}  Better luck next time`)
        } 
    },[Wickets])
    useEffect(() =>{
        if (Runs>0) {
            console.log(`Runs: ${Runs} Good Job!`)
        } 
    },[Runs])
  return (
    <div>
        <button onClick={() => setRuns((prevState) => prevState +1)}>
            Runs({Runs})
        </button>
        <button onClick={() => setWickets((prevState) => prevState +1)}>
            Wickets({Wickets})
        </button>
       
    </div>
  )
}

// export default function Hook() {
//     const [count, setCount] = useState(0);
//     console.log("component")
//   return (
//     <div>
//         <button onClick={() => setCount((prevState) => prevState +1)}>
//             Click
//         </button>
//         <span>{count}</span>
//     </div>
//   )
// }
