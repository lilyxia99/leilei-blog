import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';



function LinkNode({data,isConnectable}){


    return(
        <>
        <div className="link_node node">

        <Handle type="target" position={Position.Top} id="top" isConnectable={isConnectable} />
        <Handle type="target" position={Position.Left} id="left" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Bottom} id="bottom" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Right} id="right" isConnectable={isConnectable} />

        <iframe src={data.url} height="400px" width="600px" allowFullScreen></iframe>
        
        </div>
        </>
    )
}

export default memo(LinkNode);