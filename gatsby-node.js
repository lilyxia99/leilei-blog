// gatsby-node.js
const fs = require('fs').promises;
const path = require('path');

exports.createPages = async function ({ actions }) {
    const { createPage } = actions; // Destructure the createPage function from the actions object

    const artistMapDataPath = await path.resolve('./content/garden/Artist-Map.canvas');
    const data = await fs.readFile(artistMapDataPath, 'utf8');
    const { nodes, edges } = JSON.parse(data);

    // Reformat nodes according to the new structure
    const reformattedNodes = nodes.map(node => {
        // Initialize the new node structure
        const newNode = {
        id: node.id,
        type: node.type,
        position: { x: node.x, y: node.y }, // Set the position with x and y
        data: {}
        };

        // Check the type of the node and reformat accordingly
        if (node.type === 'text') {
        newNode.data.label = node.text; // Change 'text' to 'label' in data
        } else if (node.type === 'link') {
        newNode.data.url = node.url; // Change 'url' to be inside data
        }else if(node.type==='file'){
          newNode.data.file = node.file;
        }

        return newNode;
    });

    // Create a single page for the React Flow diagram
    createPage({
    path: '/artist-map', // The path to the new page
    component: path.resolve('./src/templates/artistMapTemplate.js'), // Path to the template for the page
    context: {
        // Data passed to the context is available in page queries
        nodes:reformattedNodes,
        edges,
    },
    });
};