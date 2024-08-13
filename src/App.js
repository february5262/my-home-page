import './App.css';
import React, { useState, useCallback } from 'react';
import SolarSystem from './components/SolarSystem';
import { HoverArea } from './components/CategorySection';
import { CameraProvider } from './context/CameraContext'; // CameraProvider를 가져옴

function App() {
  
    return (
      <CameraProvider>
        <div className="app">
            <HoverArea />
            <SolarSystem />
        </div>
      </CameraProvider>
    );
}

export default App;