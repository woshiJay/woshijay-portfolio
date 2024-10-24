"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Float } from '@react-three/drei';
import React, { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('/models/shiba.glb');
  return (
    <Float
      speed={5} // Animation speed
      rotationIntensity={1} // Rotation intensity
      floatIntensity={1} // Float intensity
    >
      <Center>
        <primitive 
          object={scene} 
          scale={5} // Adjusted scale
          position={[0, -1, 0]} // Adjust Y position to center vertically
        />
      </Center>
    </Float>
  );
}

function LoadingPlaceholder() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="text-red-500">
          Error loading 3D model. Please check the console for details.
        </div>
      );
    }
    return this.props.children;
  }
}

const ThreeElement = () => {
  return (
    <div className="w-full h-full relative aspect-square">
      <ErrorBoundary>
        <Canvas
          camera={{
            position: [0, 0, 30],
            fov: 25, // Narrower field of view for better focus
            near: 0.1,
            far: 1000
          }}
          className="w-full h-full"
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={0.5} 
            castShadow 
          />
          <directionalLight 
            position={[-5, 5, -5]} 
            intensity={0.3} 
          />

          {/* Scene content */}
          <Suspense fallback={<LoadingPlaceholder />}>
            <Model />
          </Suspense>

          {/* Controls */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
            rotateSpeed={1}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeElement;