import './App.css';
import React, { useState } from 'react';
import TopAppBar from './components/TopAppBar';

function App() {

  const [state, setState] = useState({
    modelType: 'logreg',
    sepalLengthCm: 5.0,
    sepalWidthCm: 5.0,
    petalLengthCm: 5.0,
    petalWidthCm: 5.0
  })

  return (
    <div className="App">
      <TopAppBar />
    </div>
  );
}

export default App;
