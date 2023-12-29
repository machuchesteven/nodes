import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Heading, Center } from "@chakra-ui/react";

function ViewBasedAnimation() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    console.log("is in view", isInView);
  }, [isInView]);
  return (
    <Box
      as={motion.div}
      h={"100vh"}
      w="80%"
      mx={"auto"}
      bg={"teal.50"}
      borderRadius={"lg"}
      ref={ref}
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 3,
        delay: -3,
        type: "spring",
        repeat: "infinity",
      }}
      exit={{
        opacity: 0,
        x: 100,
      }}
    >
      <Center>
        <Heading textAlign={"center"} my={10}>
          View Based Animation
        </Heading>
      </Center>
    </Box>
  );
}

export default ViewBasedAnimation;
