import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

const fadeAnimations = {
  before: {
    opacity: 0,
    x: 500,
  },
  fade: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    transition: {
      duration: 0.3,
    },
  },
};

const Fade = ({ children, once, amount, props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  return (
    <Box
      as={motion.div}
      variants={fadeAnimations}
      initial={"before"}
      animate={isInView ? "fade" : "before"}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export default Fade;
