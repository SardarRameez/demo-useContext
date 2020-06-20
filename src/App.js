import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import valueContext from './Context';

function App() {
  let value=useState(6)
  return (
    <valueContext.Provider value={value}>
      In App component
        <Parent></Parent>
    </valueContext.Provider>
  );
}

export default App;
