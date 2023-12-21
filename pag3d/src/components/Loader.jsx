import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-2 border-t-blue-500 border-blue-500"></div>
      </div>
    </Html>
  );
}

export default Loader;
