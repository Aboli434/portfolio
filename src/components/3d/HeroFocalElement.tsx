"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";

export default function HeroFocalElement() {
  const { phase } = useStore();
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Responsive scale based on viewport width
  const isMobile = viewport.width < 10; // Simple threshold based on 3D viewport width units
  const scale = isMobile ? 0.8 : 1.2;
  const positionX = isMobile ? 0 : viewport.width * 0.15; // Shift right on desktop
  const positionY = isMobile ? -viewport.height * 0.15 : 0; // Shift down slightly on mobile

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Smoothly scale down when not in hero phase
    if (groupRef.current) {
      const targetScale = phase === 'hero' ? scale : 0;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

      if (phase === 'hero') {
        // Subtle floating and rotation based on pointer parallax (optional addition)
        groupRef.current.position.y = positionY + Math.sin(time * 0.5) * 0.2;
        groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
        groupRef.current.rotation.x = Math.cos(time * 0.2) * 0.05;
      }
    }

    if (phase !== 'hero') return;

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.3) * 0.2;
      outerRingRef.current.rotation.y = time * 0.2;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = Math.PI / 3 + Math.cos(time * 0.4) * 0.3;
      innerRingRef.current.rotation.y = -time * 0.3;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.5;
      coreRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={[positionX, positionY, 0]} 
      scale={scale}
    >
      <Float floatIntensity={1.5} speed={1.5} rotationIntensity={0.2}>
        {/* Central Glass Object */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[2, 1]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#FFF8E8"
            attenuationColor="#702C3B"
            attenuationDistance={5}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Outer Elegant Ring */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[3.2, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color="#B69A62" 
            metalness={1} 
            roughness={0.15} 
            emissive="#B69A62"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Inner Elegant Ring */}
        <mesh ref={innerRingRef}>
          <torusGeometry args={[2.6, 0.03, 16, 100]} />
          <meshStandardMaterial 
            color="#702C3B" 
            metalness={0.8} 
            roughness={0.2} 
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Floating dust/particles around the focal element */}
        <group scale={1.5}>
          {Array.from({ length: 15 }).map((_, i) => (
            <mesh 
              key={i} 
              position={[
                (Math.random() - 0.5) * 8, 
                (Math.random() - 0.5) * 8, 
                (Math.random() - 0.5) * 8
              ]}
              scale={Math.random() * 0.05 + 0.02}
            >
              <sphereGeometry args={[1, 8, 8]} />
              <meshBasicMaterial color={i % 2 === 0 ? "#B69A62" : "#D96C32"} transparent opacity={0.6} />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}
