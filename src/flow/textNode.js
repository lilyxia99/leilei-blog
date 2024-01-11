import React, { memo } from 'react';

function TextNode({data}){
    return(
        <>
        <div className="text_node">
        {data.label}
        </div>
        </>
    )
}

export default memo(TextNode);