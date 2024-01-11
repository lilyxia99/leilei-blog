import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';


function FileNode({data,isConnectable}){
    return(
        <>
        <div className="file_node">
        <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div>
            {data.file}
            </div>
        <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
        </div>
        </>
    )
}

export default memo(FileNode);