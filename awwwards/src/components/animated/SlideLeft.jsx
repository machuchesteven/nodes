import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
const slideLeftAnimation = {
  before: {
    opacity: 0,
    x: 500,
  },
  slideLeft: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  slideRight: {
    opacity: 0,
    x: 500,
  },
};

const SlideLeft = ({ children, once = true, amount = 0.3, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: amount, once });
  return (
    <AnimatePresence mode="wait">
      <Box
        as={motion.div}
        ref={ref}
        {...props}
        variants={slideLeftAnimation}
        animate={isInView ? "slideLeft" : "before"}
        exit={"slideRight"}
      >
        {children}
      </Box>
    </AnimatePresence>
  );
};

export default SlideLeft;
