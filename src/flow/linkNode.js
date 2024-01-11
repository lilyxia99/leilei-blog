import React, { memo } from 'react';


function LinkNode({data}){
    return(
        <>
        <div className="link_node">
        <iframe src={data.url} height="400px" width="600px" allowFullScreen></iframe>
        </div>
        </>
    )
}

export default memo(LinkNode);