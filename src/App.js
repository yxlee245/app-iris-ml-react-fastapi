import './App.css';
import React, { useState } from 'react';
import TopAppBar from './components/TopAppBar';
import ModelSelectBar from './components/ModelSelectBar';
import ModelTypeDisplay from './components/ModelTypeDisplay';

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
      <ModelTypeDisplay state={state} />
      <ModelSelectBar state={state} setState={setState} />
    </div>
  );
}

export default App;
