import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { Link } from "gatsby"

function FileNode({data,isConnectable}){
    return(
        <>
        <div className="file_node">
        <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div>
            {data.file}
            <Link to={data.file}>:Link</Link>
            </div>
        <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
        </div>
        </>
    )
}

export default memo(FileNode);