import React,{useState} from "react";

export const Usestate=()=>{
    const[cnt,setCnt]=useState(0);
    const[cnt1,setCnt1]=useState(0)
    return(
        <div>
            <h1>Usestate</h1>
            <h1>{cnt}</h1>
            <button onClick={()=>setCnt(cnt+1)}>INC</button>
            <h1>{cnt1}</h1>
            <button onClick={()=>setCnt1(cnt1-1)}>ADD</button>
        </div>
    )
}