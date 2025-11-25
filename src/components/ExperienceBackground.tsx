import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import * as THREE from "three";

type ExperienceBackgroundProps = {
  variant?: "hero" | "section";
  colorScheme?: "dark" | "light" | "auto";
};

function Particles({
  variant = "section",
  colorScheme = "dark",
  animated = true
}: {
  variant?: "hero" | "section";
  colorScheme?: "dark" | "light";
  animated?: boolean;
}) {
  const ref = useRef<THREE.Points>(null);
  const isHero = variant === "hero";
  const count = isHero ? 900 : 250;
  const baseColor = colorScheme === "light" ? "#2563eb" : "#6366f1";
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      // Создаем градиент цветов
      const color = new THREE.Color(baseColor);
      const hueOffset = colorScheme === "light" ? 0.08 : 0.15;
      const saturation = colorScheme === "light" ? 0.65 : 0.75;
      const lightnessBase = colorScheme === "light" ? 0.55 : 0.4;
      color.setHSL(
        0.55 + Math.random() * hueOffset,
        saturation,
        lightnessBase + Math.random() * 0.2
      );
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, [count, baseColor, colorScheme]);

  useFrame((state) => {
    if (!animated || !ref.current) {
      return;
    }
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={baseColor}
        size={variant === "hero" ? 0.05 : 0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AnimatedGeometry({
  variant = "section",
  colorScheme = "dark",
  animated = true
}: {
  variant?: "hero" | "section";
  colorScheme?: "dark" | "light";
  animated?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const baseColor = colorScheme === "light" ? "#0ea5e9" : "#6366f1";
  
  useFrame((state) => {
    if (!animated || !meshRef.current) {
      return;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <octahedronGeometry args={[variant === "hero" ? 2 : 1.5, 0]} />
      <meshStandardMaterial
        color={baseColor}
        wireframe
        transparent
        opacity={variant === "hero" ? 0.35 : 0.2}
        emissive={baseColor}
        emissiveIntensity={colorScheme === "light" ? (variant === "hero" ? 0.35 : 0.15) : variant === "hero" ? 0.5 : 0.25}
      />
    </mesh>
  );
}

export function ExperienceBackground({
  variant = "section",
  colorScheme = "auto"
}: ExperienceBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const computedScheme =
    colorScheme === "auto"
      ? resolvedTheme === "light"
        ? "light"
        : "dark"
      : colorScheme;
  const isHero = variant === "hero";
  const gradientOpacity = isHero ? "opacity-70" : "opacity-60";
  const gradientBlend =
    computedScheme === "light"
      ? isHero
        ? "mix-blend-normal"
        : "mix-blend-multiply"
      : isHero
        ? "mix-blend-screen"
        : "mix-blend-lighten";
  const blurClass = isHero ? "blur-3xl" : "blur-[80px]";
  const containerZ = isHero ? "z-0" : "-z-10";
  const gradientStyle =
    computedScheme === "light"
      ? {
          background:
            "linear-gradient(180deg, rgba(191,219,254,0.65) 0%, rgba(191,219,254,0.2) 35%, rgba(248,250,252,0) 100%)"
        }
      : {
          background:
            "linear-gradient(180deg, rgba(5,8,15,0.95) 0%, rgba(5,8,15,0.5) 45%, rgba(5,8,15,0.05) 100%)"
        };

  if (!isHero) {
    return (
      <div className={`absolute inset-0 ${containerZ} overflow-hidden pointer-events-none`}>
        <div className={`absolute inset-0 ${blurClass} ${gradientOpacity}`} style={gradientStyle} />
      </div>
    );
  }

  const animated = !reduceMotion;

  return (
    <div className={`absolute inset-0 ${containerZ} overflow-hidden pointer-events-none`}>
      <div
        className={`absolute inset-0 ${blurClass} ${gradientOpacity} ${gradientBlend}`}
        style={gradientStyle}
      />
      <Canvas
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 10], fov: 75 }}
        frameloop={animated ? "always" : "demand"}
        dpr={animated ? [1, 1.5] : [1, 1.2]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={isHero ? 0.8 : 0.45} />
        <pointLight position={[10, 10, 10]} intensity={computedScheme === "light" ? 1.1 : 1.2} />
        <Particles variant={variant} colorScheme={computedScheme} animated={animated} />
        <AnimatedGeometry variant={variant} colorScheme={computedScheme} animated={animated} />
      </Canvas>
    </div>
  );
}

