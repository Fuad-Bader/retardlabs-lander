// src/components/WireframeIcosahedron.js
import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WireframeIcosahedron = () => {
  const wireframeRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Create icosahedron geometry and materials
  const { geometry, material } = useMemo(() => {
    // Create icosahedron geometry
    const geo = new THREE.IcosahedronGeometry(20, 1);

    // Create wireframe geometry
    const wireframeGeo = new THREE.WireframeGeometry(geo);

    // Create line material with blue color
    const mat = new THREE.LineBasicMaterial({
      color: 0x4080ff,
      transparent: true,
      opacity: 0.8,
    });

    return { geometry: wireframeGeo, material: mat };
  }, []);

  useFrame((state) => {
    if (wireframeRef.current) {
      // Calculate target rotation based on mouse position
      const targetRotationY = mousePosition.x * Math.PI * 0.5;
      const targetRotationX = mousePosition.y * Math.PI * 0.3;

      // Smooth rotation towards mouse position
      wireframeRef.current.rotation.y = THREE.MathUtils.lerp(
        wireframeRef.current.rotation.y,
        targetRotationY,
        0.05
      );

      wireframeRef.current.rotation.x = THREE.MathUtils.lerp(
        wireframeRef.current.rotation.x,
        targetRotationX,
        0.05
      );

      // Add subtle continuous rotation
      wireframeRef.current.rotation.z += 0.002;

      // Add subtle floating motion
      wireframeRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5;

      // Subtle scale pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      wireframeRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main wireframe icosahedron */}
      <lineSegments
        ref={wireframeRef}
        geometry={geometry}
        material={material}
        scale={[0.1, 0.1, 0.1]}
      />
      {/* Additional ambient lighting effects */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4080ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.3} color="#8040ff" />
    </group>
  );
};

export default WireframeIcosahedron;
