import React, { memo } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';
import 'reactflow/dist/style.css';
import { Link } from "gatsby"

const convertToLink = (filePath) => {

    
    // Replace "/" with "%2F"
    const encodedPath = filePath.replace(/\//g, '%2F');
    
    // Remove ".md" from the end
    const cleanedPath = encodedPath.replace(/\.md$/, '');

    // Construct the final link
    const finalLink = `https://www.leileixia.online/?stackedPages=%2F${cleanedPath}`;

    return finalLink;
  };

function FileNode({data,isConnectable, selected}){

    const fileLink = convertToLink(data.file)
    //console.log(fileLink)
    const iframeStyles = {
        width: '100%', // Set the width to 100%
        height: '400px', // Set the desired height
        border: '1px solid #ccc', // Add a border for better visualization
      };
    
    const nodeStyle={
        backgroundColor:data.color,
    }

    return(
        <>
        <div className="file_node node" style={nodeStyle}>
        <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
        <Handle type="target" position={Position.Top} id="top" isConnectable={isConnectable} />
        <Handle type="target" position={Position.Left} id="left" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Bottom} id="bottom" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Right} id="right" isConnectable={isConnectable} />

        <iframe src={fileLink} style={iframeStyles}></iframe>
            <div>
            {data.file}
            <Link to={data.file}>:Link</Link>
            </div>
        </div>
        </>
    )
}

export default memo(FileNode);