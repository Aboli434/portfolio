"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";

export default function AIVisual() {
  const { aiStatus, phase } = useStore();
  const groupRef = useRef<THREE.Group>(null);
  
  // Body parts refs
  const headRef = useRef<THREE.Group>(null);
  const jawRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const torsoGlowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Position interpolation based on phase
    let targetX = 0;
    let targetY = 2;
    let targetZ = 5;

    if (phase === 'hero') {
      targetX = 3.5; 
      targetY = 1.5; 
      targetZ = 12; // Camera is at z=20, distance = 8
    } else if (phase === 'universe') {
      targetX = 5; 
      targetY = 3; 
      targetZ = -2; // Camera is at z=2
    } else if (phase === 'project') {
      // Camera is at z=-5, looking towards -Z. 
      // Place avatar in foreground on the left.
      targetX = -3.5; 
      targetY = -0.5; 
      targetZ = -7.5; 
    }

    // Look at camera smoothly
    const cameraPos = state.camera.position;
    
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.03);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.03);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.03);

    // Make the avatar slowly face the general direction of the camera
    const angleToCamera = Math.atan2(cameraPos.x - groupRef.current.position.x, cameraPos.z - groupRef.current.position.z);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, angleToCamera, 0.05);

    const time = state.clock.elapsedTime;
    
    // Procedural Speaking & Idle Animation
    if (aiStatus === 'speaking') {
      // Simulate speech syllables using combined sine waves
      const speechRhythm = Math.pow(Math.sin(time * 15) * Math.sin(time * 8) * Math.cos(time * 3), 2);
      
      // Jaw rotation drops down rhythmically
      if (jawRef.current) {
        jawRef.current.rotation.x = THREE.MathUtils.lerp(jawRef.current.rotation.x, speechRhythm * 0.2, 0.3);
      }
      
      // Mouth glow intensifies when jaw opens
      if (mouthRef.current) {
        (mouthRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5 + speechRhythm * 2;
      }
      
      // Head subtly bobs and turns while speaking to feel alive
      if (headRef.current) {
        headRef.current.rotation.y = Math.sin(time * 2.5) * 0.05;
        headRef.current.rotation.x = Math.sin(time * 4) * 0.02;
      }

      // Torso glow pulses with speech
      if (torsoGlowRef.current) {
        (torsoGlowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8 + speechRhythm;
      }
      
      // Eye core flickers
      if (coreRef.current) {
        (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.5 + speechRhythm * 0.5;
      }
      
    } else {
      // Idle Animation
      if (jawRef.current) {
        jawRef.current.rotation.x = THREE.MathUtils.lerp(jawRef.current.rotation.x, 0, 0.1);
      }
      if (mouthRef.current) {
        (mouthRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = THREE.MathUtils.lerp((mouthRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity, 0, 0.1);
      }
      if (torsoGlowRef.current) {
        (torsoGlowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.3 + Math.sin(time * 1.5) * 0.2;
      }
      if (coreRef.current) {
        (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.0 + Math.sin(time * 2) * 0.2;
      }
      
      // Gentle floating head movement
      if (headRef.current) {
        headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, Math.sin(time * 0.5) * 0.05, 0.05);
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, Math.sin(time * 0.8) * 0.02, 0.05);
      }
    }
  });

  return (
    <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.1}>
      {/* Initialize at a visible position with a larger scale to feel like a prominent entity */}
      <group ref={groupRef} position={[3.5, 1.5, 12]} scale={1.2}>
        
        {/* Dedicated Avatar Lighting */}
        <pointLight position={[2, 2, 2]} intensity={2} color="#ffffff" distance={10} />
        <pointLight position={[-2, 1, -2]} intensity={1.5} color="#d4af37" distance={10} />
        {/* Head Assembly */}
        <group ref={headRef} position={[0, 0.8, 0]}>
          {/* Main Skull / Casing */}
          <mesh scale={[1, 1.15, 1.1]}>
            <sphereGeometry args={[0.5, 64, 64]} />
            <meshStandardMaterial color="#121216" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Face Visor (Sleek Glass Plate) */}
          <mesh position={[0, 0.02, 0.15]} scale={[0.85, 0.9, 0.95]} rotation={[-0.05, 0, 0]}>
            <sphereGeometry args={[0.5, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshPhysicalMaterial 
              color="#050505" 
              metalness={0.9} 
              roughness={0.05}
              clearcoat={1}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Inner Glowing Eye/Core (Horizontal Slit) */}
          <mesh ref={coreRef} position={[0, 0.15, 0.42]}>
            <boxGeometry args={[0.3, 0.02, 0.02]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.5} />
          </mesh>

          {/* Jaw / Lower Face Panel */}
          <group ref={jawRef} position={[0, -0.1, 0.25]}>
            {/* Jaw Mesh */}
            <mesh position={[0, -0.15, 0.15]} rotation={[0.2, 0, 0]}>
              <boxGeometry args={[0.35, 0.25, 0.2]} />
              <meshStandardMaterial color="#1a1a20" metalness={0.7} roughness={0.3} />
            </mesh>
            
            {/* Internal Mouth Glow (Hidden under visor, revealed when jaw opens) */}
            <mesh ref={mouthRef} position={[0, 0, 0.2]}>
              <boxGeometry args={[0.15, 0.02, 0.05]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0} />
            </mesh>
          </group>
        </group>

        {/* Neck */}
        <mesh position={[0, 0.2, -0.05]}>
          <cylinderGeometry args={[0.15, 0.2, 0.6, 32]} />
          <meshStandardMaterial color="#0a0a0c" metalness={0.9} roughness={0.4} />
        </mesh>

        {/* Shoulders / Upper Torso */}
        <group position={[0, -0.4, 0]}>
          {/* Main Torso */}
          <mesh scale={[1.6, 0.8, 1.1]}>
            <sphereGeometry args={[0.6, 64, 64, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
            <meshStandardMaterial color="#1a1a20" metalness={0.6} roughness={0.3} />
          </mesh>
          
          {/* Torso Inner Glow Core / Heart */}
          <mesh ref={torsoGlowRef} position={[0, 0.1, 0.5]}>
            <circleGeometry args={[0.1, 32]} />
            <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.5} />
          </mesh>
          
          {/* Accent Neck Ring */}
          <mesh position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.25, 0.02, 16, 64]} />
            <meshStandardMaterial color="#444455" metalness={1} roughness={0.2} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
