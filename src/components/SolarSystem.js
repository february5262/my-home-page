import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useCameraContext } from '../context/CameraContext';
import * as THREE from 'three';

const Particles = ({ count }) => {
    const meshRef = useRef();
    const positions = new Float32Array(count * 3);
  
    // 파티클의 위치를 랜덤하게 설정
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;  // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;  // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;  // Z
    }
  
    useFrame(() => {
      // 애니메이션 효과를 추가할 경우 이 부분에서 설정 가능
      meshRef.current.rotation.y += 0.001;
    });
  
    return (
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          color="white" 
          size={0.5} 
          sizeAttenuation 
          transparent 
          opacity={0.8} 
        />
      </points>
    );
  };
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
        camera.position.lerp(new THREE.Vector3(0, 0, 50), 0.05);
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
            
            <Particles count={1000} />

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
