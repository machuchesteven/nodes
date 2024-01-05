import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import skyObject from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber"; 
const Sky = ({ isRotating, ...props }) => {
  const skyRef = useRef(null);
  const sky = useGLTF(skyObject);
  useFrame((_, delta) => {
    if (isRotating) {
      // delta comes from useFrame
      skyRef.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh {...props} ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
