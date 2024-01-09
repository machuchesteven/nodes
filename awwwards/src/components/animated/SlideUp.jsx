import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";
const animations = {
  before: {
    opacity: 0,
    y: 40,
  },
  slideIn: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const SlideUp = ({ children, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <Box
      ref={ref}
      {...props}
      as={motion.div}
      variants={animations}
      initial={"before"}
      animate={isInView ? "slideIn" : "before"}
    >
      {children}
    </Box>
  );
};

export default SlideUp;
