import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const birdRef = useRef(null);
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // birdRef.current.rotation.y += 0.5 * delta; // This makes the bird move in a circle at its own center of mass

    // to change the way it moves to other positions, we need to change the position of the bird
    // birdRef.current.position.x += 0.5 * delta;
    // birdRef.current.position.y -= 0.5 * delta;
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }
    if (birdRef.current.rotation.y === 0) {
      // Move the bed as it is in rotatio of 0 degree
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Move back after it is far from the camera
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.x += 0.01;
    }
  });
  return (
    <mesh position={[-5, 2, 1]} scale={[0.002, 0.002, 0.002]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
