import React from 'react';
import './App.css';

import Header from './Components/header';
import GithubList from './Components/github-list';

function App() {
  return (
    <div className='App'>
      <Header />
      <GithubList />
    </div>
  );
}

export default App;
