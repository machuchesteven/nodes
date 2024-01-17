import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

const scaleAnimations = {
  before: {
    opacity: 0,
    scale: 0,
  },
  scale: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};
const Scale = ({ children, once, amount, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  return (
    <Box
      variants={scaleAnimations}
      as={motion.div}
      initial={"before"}
      animate={isInView ? "scale" : "before"}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Scale;
