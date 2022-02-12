import './styles/App.scss';
import NavBar from './components/Navbar';
import CraftStoreRouting from './components/Routes';
import React, { useState } from 'react';
import { CraftProvider } from './hooks/CraftContext';


function App() {

  return (
    <CraftProvider>
      <div className="App">
        <NavBar />
        <CraftStoreRouting />
      </div>
    </CraftProvider>
  );
}

export default App;
