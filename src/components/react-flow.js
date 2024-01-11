import React from 'react';
import { useState, useCallback } from 'react';
import ReactFlow, { addEdge, SelectionMode, useEdgesState, useNodesState } from 'reactflow';
import {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';

import LinkNode from '../flow/linkNode.js';
import TextNode from '../flow/textNode.js';
import FileNode from '../flow/fileNode.js';

import '../css/custom-Node.css'

const nodeTypes = {
  link: LinkNode,
  text: TextNode,
  file:FileNode,
};


const ArtistMapPage = ({ nodes, edges }) => {

    const [changeNodes, setNodes] = useNodesState(nodes);
    const [changeEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

    //console.log("nodes",changeNodes);
  
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodeTypes = {nodeTypes}
        nodes={changeNodes}
        edges={changeEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        selectionOnDrag
        connectionMode="loose"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default ArtistMapPage;
