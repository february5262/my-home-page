import React, { createContext, useContext, useState } from 'react';
import * as THREE from 'three';

const CameraContext = createContext();

export const CameraProvider = ({ children }) => {
    const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(0, 0, 50));
    console.log(targetPosition);
    return (
        <CameraContext.Provider value={{ targetPosition, setTargetPosition }}>
            {children}
        </CameraContext.Provider>
    );
};

export const useCameraContext = () => useContext(CameraContext);
