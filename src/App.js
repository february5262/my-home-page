import './App.css';
import React from 'react';
import { CameraProvider } from './context/CameraContext'; // CameraProvider를 가져옴
import { RouterComp } from './Router';

function App() {
  
    return (
      <CameraProvider>
        <RouterComp/>
      </CameraProvider>
    );
}

export default App;