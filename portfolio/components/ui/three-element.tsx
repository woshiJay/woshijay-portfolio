"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Float } from '@react-three/drei';
import React, { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('/models/shiba.glb');
  return (
    <Float
      speed={5}
      rotationIntensity={1}
      floatIntensity={1}
    >
      <Center>
        <primitive
          object={scene}
          scale={5}
          position={[0, 2, 0]} // Moved up by adjusting Y position
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
    <div className="w-full h-[300px] sm:h-[400px] relative mt-[-50px] sm:mt-0">
      <ErrorBoundary>
        <Canvas
          camera={{
            position: [0, 0, 30],
            fov: 25,
            near: 0.1,
            far: 1000
          }}
          className="w-full h-full"
        >
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
          <Suspense fallback={<LoadingPlaceholder />}>
            <Model />
          </Suspense>
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