import React, { useRef } from "react";
import { Heading } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { textRevealAnimation } from "../../utils/animations";

/**
 * Takes in only the text and apply the text property to the element
 * used as <AnimatedText text={"sample text!"} />
 * @param {text}
 */
function AnimatedText({
  text,
  textLines,
  once = false,
  amount = 0.5,
  ...props
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount, once }); // You can add the once property
  return (
    <Heading
      ref={ref}
      as={motion.h1}
      initial={"hidden"}
      animate={isInView ? "visible" : "hidden"}
      textAlign={"center"}
      variants={textRevealAnimation}
      my={5}
      {...props}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block" }}
          variants={char === " " ? {} : textRevealAnimation}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Heading>
  );
}

export default AnimatedText;
