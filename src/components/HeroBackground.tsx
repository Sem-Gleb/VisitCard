import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

type AnimatedProps = {
  animated: boolean;
};

function ParticleField({ animated }: AnimatedProps) {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 1200;

  const positions = useMemo(() => {
    const values = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      values[i * 3] = (Math.random() - 0.5) * 1.2;
      values[i * 3 + 1] = (Math.random() - 0.5) * 12;
      values[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return values;
  }, []);

  useFrame((state) => {
    if (!animated || !ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time * 0.08) * 0.12 + time * 0.02;
    ref.current.rotation.y = Math.cos(time * 0.1) * 0.12 + time * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrbs({ animated }: AnimatedProps) {
  const ref = useRef<THREE.Group>(null);

  const orbs = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        position: [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6] as [
          number,
          number,
          number
        ],
        scale: Math.random() * 0.3 + 0.15,
        speed: Math.random() * 0.3 + 0.2,
        offset: Math.random() * Math.PI * 2,
        color: i % 2 === 0 ? "#06b6d4" : "#7c3aed"
      })),
    []
  );

  useFrame((state) => {
    if (!animated || !ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.children.forEach((orb, idx) => {
      const data = orbs[idx];
      orb.position.x = Math.sin(time * data.speed + data.offset) * 2.5;
      orb.position.y = Math.cos(time * data.speed * 0.7 + data.offset) * 2.5;
      orb.position.z = Math.sin(time * data.speed * 0.5 + data.offset) * 1.8;
    });
  });

  return (
    <group ref={ref}>
      {orbs.map((orb, idx) => (
        <mesh key={idx} position={orb.position}>
          <sphereGeometry args={[orb.scale, 24, 24]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function Stars({ animated }: AnimatedProps) {
  const ref = useRef<THREE.Points>(null);
  const starsCount = 700;

  const positions = useMemo(() => {
    const values = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      const radius = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      values[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      values[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      values[i * 3 + 2] = radius * Math.cos(phi);
    }
    return values;
  }, []);

  useFrame((state) => {
    if (!animated || !ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#ffffff" size={0.012} sizeAttenuation depthWrite={false} opacity={0.9} />
    </Points>
  );
}

export function HeroBackground() {
  const reduceMotion = useReducedMotion();
  const animated = !reduceMotion;

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 70 }}
        frameloop={animated ? "always" : "demand"}
        dpr={animated ? [1, 1.5] : [1, 1.2]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.4} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#7c3aed" />
        <Stars animated={animated} />
        <ParticleField animated={animated} />
        <FloatingOrbs animated={animated} />
        <fog attach="fog" args={["transparent", 8, 15]} />
      </Canvas>
    </div>
  );
}
