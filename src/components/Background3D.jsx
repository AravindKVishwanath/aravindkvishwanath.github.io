"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// 🎇 Custom Space Particles Component
const SpaceParticles = () => {
    const particlesRef = useRef();
    const particleCount = 5000;

    // Generate random positions
    const positions = useMemo(() => {
        const posArray = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 100; // Spread particles randomly
        }
        return posArray;
    }, []);

    // Generate random opacities for sparkle effect
    const opacities = useMemo(() => {
        const opacityArray = new Float32Array(particleCount);
        for (let i = 0; i < particleCount; i++) {
            opacityArray[i] = Math.random(); // Random opacity
        }
        return opacityArray;
    }, []);

    useFrame(({ mouse, clock }) => {
        if (particlesRef.current) {
            // Rotate slowly
            particlesRef.current.rotation.y += 0.0005;
            particlesRef.current.rotation.x += 0.0002;

            // React to mouse movement
            particlesRef.current.rotation.y += mouse.x * 0.003;
            particlesRef.current.rotation.x += mouse.y * 0.003;

            // Twinkling effect (opacity oscillation)

        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={particleCount}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial 
                attach="material" 
                size={0.05} 
                color={["#FFD700", "#00FFFF", "#FFFFFF"][Math.floor(Math.random() * 3)]} // Sparkling colors
                transparent={true} 
                depthWrite={false} 
                opacity={0.8} 
            />
        </points>
    );
};

// 🌌 Final Background Component
const Background3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 100 }} style={{ background: "linear-gradient(to bottom, #000000, #000022)" }}>
            {/* Space Particles */}
            <SpaceParticles />

            {/* Ambient Lighting */}
            <ambientLight intensity={0.6} />
            <pointLight position={[15, 45, 15]} />
        </Canvas>
    );
};

export default Background3D;