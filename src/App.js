import React from 'react';
import './App.css';

import Header from './Header';
// import EpisodeCard from './EpisodeCard';
// import EpisodeList from './EpisodeList';
import EpisodeLibraryContainer from './EpisodeLibraryContainer';

function App() {
  return (
    <>
      <Header />
      <EpisodeLibraryContainer />
    </>
  );
}

export default App;
