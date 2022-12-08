import React, { forwardRef } from "react";


export const ForwardrefuserefChild=(Props,ref)=>{
    return(
        <div>
            <h1>ForwardrefuserefChild</h1>
            <input type="text" placeholder="New" ref={ref} />
        </div>
    )
}

export default forwardRef(ForwardrefuserefChild)