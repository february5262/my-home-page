import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useCameraContext } from '../context/CameraContext';
import * as THREE from 'three';

const Sun = () => {
    return (
        <mesh>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial 
                color={'white'}
                emissive={0xffa500}
                emissiveIntensity={1}
                metalness={0.5}
                roughness={0.1}
            /> 
            <pointLight 
                color={0xfff8b0}
                intensity={1}  // 빛의 강도
                distance={200}  // 빛이 닿는 거리
                decay={0}  // 빛의 감쇠율
                castShadow  // 그림자 생성
            />
        </mesh>
    );
};

const Planet = ({ color, distance, size, speed, name }) => {
    const planetRef = useRef();
    const { setTargetPosition } = useCameraContext();

    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        planetRef.current.position.x = distance * Math.sin(elapsed * speed);
        planetRef.current.position.z = distance * Math.cos(elapsed * speed);
    });

    const handleClick = () => {
        console.log(`${name} clicked`);
    };

    return (
        <mesh ref={planetRef} onClick={handleClick}>
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

const SolarSystemScene = () => {
    const { targetPosition } = useCameraContext();
    const { camera } = useThree();

    useFrame(() => {
        // 카메라를 타겟 위치로 부드럽게 이동
        camera.position.lerp(targetPosition, 0.05);
        // camera.lookAt(0, 0, 0); // 카메라가 항상 태양을 바라보도록 설정
    });

    return (
        <>
            <Sun />

            {/* Planets */}
            <Planet name="Planet 1" color="white" distance={10} size={1} speed={0.5} />
            <Planet name="Planet 2" color="white" distance={15} size={1.5} speed={0.3} />
            <Planet name="Planet 3" color="white" distance={20} size={2} speed={0.2} />
            <Planet name="Planet 4" color="white" distance={25} size={2.5} speed={0.1} />

            <OrbitControls />
        </>
    );
};

const SolarSystem = () => {
    return (
        <Canvas
            camera={{ position: [0, 20, 50], fov: 40 }}
            style={{ height: '100vh', width: '100vw' }}
            gl={{ antialias: true }}
            onCreated={({ gl }) => {
                gl.setClearColor('black');
            }}
        >
            <SolarSystemScene />
        </Canvas>
    );
};

export default SolarSystem;
