import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";

// Custom 2.5D Shader Material for the portrait
const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Subtle 2.5D floating depth effect
    // Shoulders (bottom) move less, head (top) moves more
    float depth = uv.y * 0.05;
    pos.z += sin(uTime * 1.5 + uv.x * 2.0) * depth;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTex;
  uniform float uSpeaking;
  uniform float uBlink;
  uniform float uTime;
  
  void main() {
    vec2 uv = vUv;
    
    // --- 2.5D FAKE FACIAL ANIMATION ---
    
    // 1. MOUTH / JAW ANIMATION
    // Approximate mouth position in the 1:1 portrait
    vec2 mouthCenter = vec2(0.5, 0.38);
    float distToMouth = distance(uv, mouthCenter);
    // Create a soft mask around the mouth area
    float mouthMask = smoothstep(0.12, 0.0, distToMouth);
    
    if (uSpeaking > 0.0) {
       // Simulate jaw drop by pulling UVs downward below the lip line
       float jawDrop = uSpeaking * 0.02 * mouthMask;
       if (uv.y < 0.42) {
          uv.y += jawDrop;
       }
       // Slightly widen mouth
       uv.x += (uv.x - 0.5) * mouthMask * uSpeaking * 0.01;
    }
    
    // 2. BLINKING ANIMATION
    // Approximate eye positions
    vec2 leftEye = vec2(0.40, 0.62);
    vec2 rightEye = vec2(0.60, 0.62);
    float eyeMask = smoothstep(0.08, 0.0, distance(uv, leftEye)) + smoothstep(0.08, 0.0, distance(uv, rightEye));
    
    if (uBlink > 0.0) {
       // Pinch UVs vertically towards the eye center line to simulate eyelid closing
       uv.y = mix(uv.y, 0.62, eyeMask * uBlink * 0.7);
    }
    
    // Sample texture with warped UVs
    vec4 color = texture2D(uTex, uv);
    
    // 3. SUBTLE GLOW / BREATHING LIGHT
    // Add a very subtle pulsing cinematic rim light to the edges
    float pulse = (sin(uTime * 2.0) + 1.0) * 0.5;
    
    // Clean, sharp editorial border
    float border = step(0.02, uv.x) * step(uv.x, 0.98) * step(0.02, uv.y) * step(uv.y, 0.98);
    float edge = 1.0 - border;
    
    // Add gold rim light to the edge
    color.rgb += vec3(0.15, 0.1, 0.05) * edge * pulse;
    
    // Sharp rectangle alpha
    gl_FragColor = vec4(color.rgb, color.a);
  }
`;

function AnimatedPortrait({ aiStatus }: { aiStatus: string }) {
  const texture = useTexture("/aboli_portrait.jpg");
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // State for blinking
  const blinkState = useRef({ timer: 0, isBlinking: false, value: 0 });

  const uniforms = useMemo(
    () => ({
      uTex: { value: texture },
      uTime: { value: 0 },
      uSpeaking: { value: 0 },
      uBlink: { value: 0 },
    }),
    [texture]
  );

  useFrame((state, delta) => {
    if (!materialRef.current) return;
    const time = state.clock.elapsedTime;
    
    // Update time
    materialRef.current.uniforms.uTime.value = time;
    
    // Handle Speaking
    if (aiStatus === 'speaking') {
      const speechRhythm = Math.pow(Math.sin(time * 15) * Math.sin(time * 8) * Math.cos(time * 3), 2);
      materialRef.current.uniforms.uSpeaking.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uSpeaking.value,
        speechRhythm,
        0.3
      );
    } else {
      materialRef.current.uniforms.uSpeaking.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uSpeaking.value,
        0,
        0.1
      );
    }
    
    // Handle Blinking
    blinkState.current.timer += delta;
    if (blinkState.current.timer > 4 + Math.random() * 4) {
      blinkState.current.isBlinking = true;
      blinkState.current.timer = 0;
    }
    
    if (blinkState.current.isBlinking) {
      if (blinkState.current.timer < 0.08) {
         // Close eyes
         blinkState.current.value = THREE.MathUtils.lerp(0, 1, blinkState.current.timer / 0.08);
      } else if (blinkState.current.timer < 0.2) {
         // Open eyes
         blinkState.current.value = THREE.MathUtils.lerp(1, 0, (blinkState.current.timer - 0.08) / 0.12);
      } else {
         blinkState.current.isBlinking = false;
         blinkState.current.value = 0;
      }
    }
    materialRef.current.uniforms.uBlink.value = blinkState.current.value;
  });

  return (
    <mesh position={[2, 0, 0]} scale={[3.5, 3.5, 1]} castShadow receiveShadow>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={false}
      />
    </mesh>
  );
}

// AIVisual handles the positioning, scaling, lighting, and phase management.
export default function AIVisual() {
  const { aiStatus, phase } = useStore();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Position interpolation based on phase
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;
    let targetScale = 1.0; 

    if (phase === 'hero') {
      targetX = 1.5; 
      targetY = 0; 
      targetZ = 13.5; 
      targetScale = 1.0;
    } else if (phase === 'universe') {
      targetX = 1.2; 
      targetY = 0; 
      targetZ = -1.0; 
      targetScale = 0.5;
    } else if (phase === 'project') {
      targetX = -1.5; 
      targetY = -0.5; 
      targetZ = -8.0; 
      targetScale = 0.6;
    }

    // Smoothly animate to target position and scale
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.03);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.03);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.03);
    
    const currentScale = groupRef.current.scale.x;
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.03);
    groupRef.current.scale.set(newScale, newScale, newScale);

    // 2.5D Parallax: slight rotation tracking the mouse/camera
    const mouse = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 10, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -(mouse.y * Math.PI) / 15, 0.05);
  });

  return (
    <Float floatIntensity={0.2} speed={1.5} rotationIntensity={0.05}>
      <group ref={groupRef} position={[1.5, 0, 13.5]}>
        <AnimatedPortrait aiStatus={aiStatus} />
      </group>
    </Float>
  );
}
