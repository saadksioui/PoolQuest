'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Ensure TypeScript recognizes JSX intrinsic elements for three-fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      bufferGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      bufferAttribute: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { args?: any };
      pointsMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { color?: string; size?: number; transparent?: boolean; opacity?: number };
      octahedronGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { args?: any };
      meshStandardMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { color?: string; transparent?: boolean; opacity?: number; wireframe?: boolean; emissive?: string; emissiveIntensity?: number };
    }
  }
}

type GeometricShapeProps = {
  position: [number, number, number];
  color: string;
  scale?: number;
};

const GeometricShape = ({ position, color, scale = 1 }: GeometricShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          wireframe
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00ff41"
        size={0.1}
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00ff41" intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#00d4ff" intensity={0.5} />

      <GeometricShape position={[-8, 4, -5]} color="#00ff41" scale={0.8} />
      <GeometricShape position={[6, -3, -3]} color="#00d4ff" scale={1.2} />
      <GeometricShape position={[-4, -6, -8]} color="#ffffff" scale={0.6} />
      <GeometricShape position={[8, 2, -10]} color="#00ff41" scale={1.0} />
      <GeometricShape position={[2, 8, -6]} color="#00d4ff" scale={0.9} />

      <Particles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </Canvas>
  );
};

export default Scene3D;