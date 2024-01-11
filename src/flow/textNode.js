import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function TextNode({data,isConnectable}){
    return(
        <>
        <div className="text_node node">

        <Handle type="target" position={Position.Top} id="top" isConnectable={isConnectable} />
        <Handle type="target" position={Position.Left} id="left" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Bottom} id="bottom" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Right} id="right" isConnectable={isConnectable} />

        {data.label}
        </div>
        </>
    )
}

export default memo(TextNode);