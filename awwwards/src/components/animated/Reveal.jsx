import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

const revealVariants = {
  before: {
    opacity: 0,
    x: 500,
  },
  reveal: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const Reveal = ({ children, once = true, amount = 0.3, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  return (
    <Box
      ref={ref}
      as={motion.div}
      {...props}
      variants={revealVariants}
      initial="before"
      animate={isInView ? "reveal" : "before"}
    >
      {children}
    </Box>
  );
};

export default Reveal;
