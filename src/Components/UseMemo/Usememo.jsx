import React,{useState,useMemo} from "react";

export const Usememo=()=>{
    const[cnt,setCnt]=useState(0);
    const[cnt1,setCnt1]=useState(0)

    const Multicount=useMemo( function multi () {
           return cnt1*2
    },[cnt1])
    return(
        <div>
            <h1>Usememo</h1>
            <h1>{cnt}</h1>
            <button onClick={()=>setCnt(cnt+1)}>INC</button>
            <h1>{cnt1}</h1>
            <button onClick={()=>setCnt1(cnt1-1)}>Dec</button>
            <h1>{Multicount}</h1>

        </div>
    )
}