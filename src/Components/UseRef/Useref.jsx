import React,{useRef} from "react";

export const Useref=()=>{
    const vasim=useRef(null)

    const handleADD=()=>{
        vasim.current.value="1000";
        vasim.current.style.color="red";
        vasim.current.focus()
    }
    return(
        <div>
            <h1>Useref</h1>
            <input type="text"  ref={vasim} />
            <button onClick={handleADD}>ADD</button>
        </div>
    )
}