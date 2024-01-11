import React from 'react';
import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';

import LinkNode from '../flow/linkNode.js';
import TextNode from '../flow/textNode.js';

const ArtistMapPage = ({ nodes, edges }) => {

    console.log("nodes",nodes);

    const nodeTypes = {
        link: LinkNode,
        text: TextNode,
    };
  
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodeTypes = {nodeTypes}
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default ArtistMapPage;
