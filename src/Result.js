import React from 'react'
import Fail from './Fail'
import Pass from './Pass'
export default function Result(props) {
    if(props.marks>50){
        return <Pass />
    }
    else{ return <Fail />}
}
