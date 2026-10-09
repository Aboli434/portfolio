"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { Text, Float, Line, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";
import { projects, type Project } from "@/data/projects";

// Visual Metaphors for each project:

// IntentFlow -> Neural nodes, glowing connections
function IntentFlowVisual({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      const scale = THREE.MathUtils.lerp(groupRef.current.scale.x, hovered ? 1.2 : 1, 0.1);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#333344" wireframe opacity={hovered ? 0.8 : 0.3} transparent />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={hovered ? 1 : 0.2} />
      </mesh>
    </group>
  );
}

// Wedora -> Elegant premium arches/rings
function WedoraVisual({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      const scale = THREE.MathUtils.lerp(groupRef.current.scale.x, hovered ? 1.1 : 0.9, 0.1);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.05, 16, 100]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} emissive="#d4af37" emissiveIntensity={hovered ? 0.5 : 0.1} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.7, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// PRANSH -> Organic flowing terrain/leaf
function PranshVisual({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * -0.2;
      const scale = THREE.MathUtils.lerp(groupRef.current.scale.x, hovered ? 1.15 : 0.9, 0.1);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <torusKnotGeometry args={[0.7, 0.2, 100, 16]} />
        <MeshWobbleMaterial color="#2d4a22" factor={hovered ? 1 : 0.2} speed={2} roughness={0.6} metalness={0.1} />
      </mesh>
    </group>
  );
}

// Aasamant -> Clean structural pillars
function AasamantVisual({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      const scale = THREE.MathUtils.lerp(groupRef.current.scale.x, hovered ? 1.1 : 0.9, 0.1);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[0.2, 1.5, 0.2]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.2, 1.5, 0.2]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={hovered ? 0.8 : 0.1} />
      </mesh>
    </group>
  );
}

function ProjectNode({ 
  project, 
  position, 
  VisualComponent 
}: { 
  project: Project, 
  position: [number, number, number], 
  VisualComponent: React.FC<{hovered: boolean}> 
}) {
  const { setHoveredProject, setActiveProject, hoveredProjectId, phase } = useStore();
  const isHovered = hoveredProjectId === project.id;
  const isActive = phase === 'project';
  
  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (!isActive) {
      setHoveredProject(project.id);
      document.body.style.cursor = "pointer";
    }
  };
  
  const handlePointerOut = () => {
    if (!isActive) {
      setHoveredProject(null);
      document.body.style.cursor = "auto";
    }
  };
  
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (phase === 'universe') {
      setActiveProject(project.id);
    }
  };

  return (
    <Float floatIntensity={2} speed={2} rotationIntensity={0.5}>
      <group 
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <VisualComponent hovered={isHovered} />
        
        {/* Project Label */}
        <Text
          position={[0, -2, 0]}
          fontSize={0.4}
          color="#35251E"
          anchorX="center"
          anchorY="middle"
          fillOpacity={isHovered ? 1 : 0.6}
          letterSpacing={0.1}
        >
          {project.name.toUpperCase()}
        </Text>
        
        {/* Short description on hover */}
        <Text
          position={[0, -2.5, 0]}
          fontSize={0.15}
          color="#806B5D"
          anchorX="center"
          anchorY="middle"
          fillOpacity={isHovered ? 1 : 0}
          maxWidth={3}
          textAlign="center"
        >
          {project.description}
        </Text>
      </group>
    </Float>
  );
}

// Fashion Designer -> Sleek abstract geometric form
function FashionVisual({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      const scale = THREE.MathUtils.lerp(groupRef.current.scale.x, hovered ? 1.1 : 0.9, 0.1);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#702C3B" metalness={0.8} roughness={0.2} wireframe={!hovered} emissive="#702C3B" emissiveIntensity={hovered ? 0.3 : 0} />
      </mesh>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.5, 0.05, 1.5]} />
        <meshStandardMaterial color="#B69A62" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function ProjectUniverse() {
  const { phase } = useStore();
  const groupRef = useRef<THREE.Group>(null);
  
  // Arrange projects in a semi-circle or diamond
  const positions: [number, number, number][] = [
    [-8, 0, -5], // IntentFlow
    [-4, 2, -8], // Wedora
    [0, -2, -6], // Pransh
    [4, 1, -4],  // Aasamant
    [8, -1, -5], // Fashion
  ];
  
  const Visuals = [IntentFlowVisual, WedoraVisual, PranshVisual, AasamantVisual, FashionVisual];

  // Subtle rotation of the whole universe
  useFrame((state) => {
    if (groupRef.current && phase === 'universe') {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -10]}>
      {projects.map((project, idx) => (
        <ProjectNode 
          key={project.id} 
          project={project} 
          position={positions[idx]} 
          VisualComponent={Visuals[idx]} 
        />
      ))}
      
      {/* Connecting lines for the "universe" feel */}
      <Line
        points={[positions[0], positions[1], positions[3], positions[2], positions[0]]}
        color="#FFF0B3"
        opacity={0.1}
        transparent
        lineWidth={1}
      />
    </group>
  );
}
