import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Inner = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const opacity = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 5,
        ease: "easeIn",
      },
    },
    exit: { opacity: 0 },
  };
  return <motion.div {...anim(opacity)}>{children}</motion.div>;
};

export default Inner;
