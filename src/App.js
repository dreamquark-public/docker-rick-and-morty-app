import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Header from './Header';
import EpisodeLibraryContainer from './EpisodeLibraryContainer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={EpisodeLibraryContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
