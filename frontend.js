import React from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 5 } },
];
const initialEdges = [];

function WorkflowDesigner() {
    const [nodes, setNodes] = React.useState(initialNodes);
    const [edges, setEdges] = React.useState(initialEdges);

    const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
    return (
        <div style={{ height: 500 }}>
            <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
}

export default WorkflowDesigner;
