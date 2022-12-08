import React,{createContext} from "react";
import { Child } from "./Child";
export const fardin=createContext()
export const Parent=()=>{
    const hafiz="my name is khan"
    return(
        <div>
            <h1>parent</h1>
            <fardin.Provider value={hafiz}>
                <Child/>
            </fardin.Provider>
        </div>
    )
}