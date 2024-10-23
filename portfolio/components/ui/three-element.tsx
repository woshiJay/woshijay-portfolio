"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('/models/macintosh_128k.glb');
  return <primitive object={scene} scale={1.0} />;
}

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
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

// Loading placeholder
function LoadingPlaceholder() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

const ThreeElement = () => {
  return (
    <ErrorBoundary>
      <Canvas camera={{ position: [5, 50, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={<LoadingPlaceholder />}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </ErrorBoundary>
  );
};

export default ThreeElement;