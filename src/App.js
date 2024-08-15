import './App.css';
import React, { useState, useCallback } from 'react';
import SolarSystem from './components/main/planet/SolarSystem';
import { HoverArea } from './components/main/CategorySection';
import { CameraProvider } from './context/CameraContext'; // CameraProvider를 가져옴
import { Login } from './components/main/login/loginComponent';

function App() {
  
    return (
      <CameraProvider>
        <div className="app">
            <Login/>
            <HoverArea />
            <SolarSystem />
        </div>
      </CameraProvider>
    );
}

export default App;