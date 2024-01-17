import { MotionStyle, MotionValue } from "framer-motion";

const stylesWithCssVar = (styles) => {
  const result = {};
  for (const key in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, key)) {
      result[key] = styles[key];
      if (key !== "--") {
        result[`--${key}`] = styles[key];
      }
    }
  }
  return result;
};

export { stylesWithCssVar };
