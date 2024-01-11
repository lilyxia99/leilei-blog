import React, { memo } from 'react';


function LinkNode({data}){
    return(
        <>
        <div className="link_node">
        <a href={data.url}>Click here</a>
        </div>
        </>
    )
}

export default memo(LinkNode);