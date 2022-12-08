import React, { memo } from "react";


export const CallbackChild=()=>{
    console.log("fardin pathan")
    return(
        <div>
            <h1>CallbackChild</h1>
        </div>
    )
}
export default memo(CallbackChild)