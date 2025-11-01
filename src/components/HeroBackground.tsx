import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particle positions with more particles
  const particlesCount = 3500;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  // Animate particles with complex motion
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = Math.sin(time * 0.1) * 0.2 + time * 0.05;
      ref.current.rotation.y = Math.cos(time * 0.15) * 0.2 + time * 0.075;
      ref.current.rotation.z = Math.sin(time * 0.08) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function WaveField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 60 * 60;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    let i = 0;
    for (let xi = 0; xi < 60; xi++) {
      for (let zi = 0; zi < 60; zi++) {
        positions[i * 3] = (xi - 30) * 0.18;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (zi - 30) * 0.18;
        i++;
      }
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();
      let i = 0;
      for (let xi = 0; xi < 60; xi++) {
        for (let zi = 0; zi < 60; zi++) {
          const x = (xi - 30) * 0.18;
          const z = (zi - 30) * 0.18;
          const distance = Math.sqrt(x * x + z * z);
          positions[i * 3 + 1] = 
            Math.sin(x * 0.8 + time * 0.6) * 0.25 + 
            Math.cos(z * 0.8 + time * 0.4) * 0.25 +
            Math.sin(distance - time * 0.5) * 0.2;
          i++;
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7c3aed"
        size={0.018}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null);
  
  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      ] as [number, number, number],
      scale: Math.random() * 0.3 + 0.2,
      speed: Math.random() * 0.3 + 0.2,
      offset: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? "#06b6d4" : "#7c3aed"
    }));
  }, []);

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, i) => {
        const time = state.clock.getElapsedTime();
        const orbData = orbs[i];
        orb.position.x = Math.sin(time * orbData.speed + orbData.offset) * 3;
        orb.position.y = Math.cos(time * orbData.speed * 0.7 + orbData.offset) * 3;
        orb.position.z = Math.sin(time * orbData.speed * 0.5 + orbData.offset) * 2;
      });
    }
  });

  return (
    <group ref={orbsRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.scale, 32, 32]} />
          <meshBasicMaterial 
            color={orb.color} 
            transparent 
            opacity={0.15}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const starsCount = 1500;
  const positions = useMemo(() => {
    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      const radius = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
        <Stars />
        <ParticleField />
        <WaveField />
        <FloatingOrbs />
        <fog attach="fog" args={['transparent', 8, 15]} />
      </Canvas>
    </div>
  );
}
