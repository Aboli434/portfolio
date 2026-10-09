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
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}>
      <color attach="background" args={["#FFF8E8"]} />
      <fogExp2 attach="fog" args={["#FFF8E8", 0.02]} />
      
      <CinematicCamera />
      
      <ambientLight intensity={0.6} color="#FFF8E8" />
      <spotLight position={[10, 20, 10]} angle={0.2} penumbra={1} intensity={3} color="#FFF0B3" castShadow />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#D96C32" />

      <StudioEnvironment />
      <ProjectUniverse />
      <AIVisual />
      
      <Sparkles count={150} scale={25} size={2} speed={0.2} opacity={0.4} color="#D96C32" />
      
      <DreiEnvironment preset="studio" />
    </Canvas>
  );
}
