import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import { adjustIslandForScreenSize } from "../utils/positioning";
import Plane from "../models/Plane";

function Homepage() {
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight />
          <pointLight />
          <spotLight /> {/* Is similar to the pointlight*/}
          <hemisphereLight
            skyColor={"#b1e1ff"}
            intensity={1}
            groundColor={"#000000"}
          />
          <Sky />
          <Bird />
          <Plane />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Homepage;
