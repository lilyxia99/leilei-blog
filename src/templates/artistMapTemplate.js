import React from 'react';
import ArtistMapPage from '../components/react-flow'

const Home =({pageContext})=>{
  const { nodes, edges } = pageContext;
  return (
    <ArtistMapPage
    nodes={nodes}
    edges={edges}
    ></ArtistMapPage>
  );
}

export default Home;