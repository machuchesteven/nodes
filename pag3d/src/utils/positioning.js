/**
 * Gives a an array with the [scale, position, rotation] of the screen to be applied to your 3D model
 * example const [modelScale, modelPosition, modelRotation] = adjustIslandForScreenSize();
 */
const adjustIslandForScreenSize = () => {
  let screenScale = null;
  let rotation = [0.1, 4.7, 0];
  let screenPosition = [0, -6.5, -43];
  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9]; // three dimensions for x,y,z
  } else {
    screenScale = [1, 1, 1];
  }
  return [screenScale, screenPosition, rotation];
};

export { adjustIslandForScreenSize };
