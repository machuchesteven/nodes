import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Box, Heading } from "@chakra-ui/react";

function ScrollBasedAnimation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,
          backgroundColor: "blue",
          transformOrigin: "left",
          position: "sticky",
          top: "0",
          width: "100%",
          height: "20px",
          marginBottom: "5px",
        }}
      />
      <Box as={motion.div} h={"100vh"} w={"80%"} mx={"auto"}>
        <Heading textAlign={"center"} my={"auto"}>
          Scroll Based Animation
        </Heading>
      </Box>
    </>
  );
}

export default ScrollBasedAnimation;
