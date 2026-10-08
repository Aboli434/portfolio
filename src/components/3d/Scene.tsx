"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment as DreiEnvironment, Sparkles, PerspectiveCamera, Stars } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useStore } from "@/lib/store";
import ProjectUniverse from "./ProjectUniverse";
import AIVisual from "./AIVisual";

function CinematicCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { mouse } = useThree();
  const { phase, activeProjectId } = useStore();

  useEffect(() => {
    if (!cameraRef.current) return;

    // Kill any running camera tweens to prevent abrupt overlapping animations
    gsap.killTweensOf(cameraRef.current.position);
    gsap.killTweensOf(cameraRef.current.rotation);

    if (phase === 'hero') {
      // Intro state, far back
      gsap.to(cameraRef.current.position, {
        x: 0, y: 0, z: 20,
        duration: 2, ease: "power3.inOut"
      });
      gsap.to(cameraRef.current.rotation, {
        x: 0, y: 0, z: 0,
        duration: 2, ease: "power3.inOut"
      });
    } else if (phase === 'universe') {
      // Enter world, move closer to ProjectUniverse
      gsap.to(cameraRef.current.position, {
        x: 0, y: 0, z: 2,
        duration: 3, ease: "power3.inOut"
      });
      gsap.to(cameraRef.current.rotation, {
        x: 0, y: 0, z: 0,
        duration: 3, ease: "power3.inOut"
      });
    } else if (phase === 'project') {
      gsap.to(cameraRef.current.position, {
        x: 0, y: 0, z: -5,
        duration: 2.5, ease: "power3.inOut"
      });
    }
  }, [phase, activeProjectId]);

  useFrame((state) => {
    if (cameraRef.current && phase !== 'project') {
      const targetX = (mouse.x * 2);
      const targetY = (mouse.y * 2) + (phase === 'universe' ? 1 : 0);
      
      cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.02;
      
      if (phase === 'hero') {
        cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.02;
        cameraRef.current.lookAt(0, 0, 0);
      }
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 20]} fov={35} />;
}

function StudioEnvironment() {
  const groupRef = useRef<THREE.Group>(null);
  const { phase } = useStore();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Monolith 1 */}
      <mesh position={[-8, 0, -10]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[3, 20, 3]} />
        <meshStandardMaterial color="#111115" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Monolith 2 */}
      <mesh position={[8, -2, -15]} rotation={[0, -Math.PI / 6, 0]}>
        <boxGeometry args={[4, 25, 4]} />
        <meshStandardMaterial color="#0a0a0c" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}>
      <color attach="background" args={["#050507"]} />
      <fogExp2 attach="fog" args={["#050507", 0.02]} />
      
      <CinematicCamera />
      
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#222233" />

      <StudioEnvironment />
      <ProjectUniverse />
      <AIVisual />
      
      <Stars radius={50} depth={50} count={1500} factor={2} saturation={0} fade speed={0.5} />
      <Sparkles count={80} scale={25} size={1.5} speed={0.2} opacity={0.1} color="#ffffff" />
      
      <DreiEnvironment preset="city" />
    </Canvas>
  );
}
