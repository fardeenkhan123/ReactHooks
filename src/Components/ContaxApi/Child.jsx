import React,{useContext} from "react";
import {fardin} from './Parent'
export const Child=()=>{
    const yusuf=useContext(fardin)
    return(
        <div>

            <h1>
                Child

            </h1>
            <h1>{yusuf}</h1>
        </div>
    )
}