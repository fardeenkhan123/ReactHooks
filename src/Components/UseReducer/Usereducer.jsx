import React,{useReducer} from "react";


export const initialState={
    countone:1,
    counttwo:1,
    countthree:2,
    countfour:4
}

export const reducer=(state,action)=>{
    if(action.type=="increment"){
     return{...state,countone:state.countone+action.data}
    }
    if(action.type=="decrement"){
        return{...state,counttwo:state.counttwo-action.data}
    }
    if(action.type=="multiplication"){
        return{...state,countthree:state.countthree*action.data}
    }
    if(action.type=="dividation"){
      return{...state,countfour:state.countfour/action.data}
    }
}
export const Usereducer=()=>{
    const[count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h1>Usereducer</h1>
                   <h1>{count.countone}</h1>
            <button onClick={()=>dispatch({type:"increment",data:1})}>INC</button>
            <h1>{count.counttwo}</h1>
            <button onClick={()=>dispatch({type:"decrement",data:1})}>INC</button>
            <h1>{count.countthree}</h1>
            <button onClick={()=>dispatch({type:"multiplication",data:2})}>INC</button>
            <h1>{count.countfour}</h1>
            <button onClick={()=>dispatch({type:"dividation",data:2})}>INC</button>
        </div>
    )
}