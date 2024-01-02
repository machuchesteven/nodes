import React, { useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const HorizontalScrollPage = () => {
  const ref = useRef(null);
  return (
    <Box as={motion.div}>
      <Box
        mx={5}
        mb={2}
        display={"flex"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box h={"100vh"} w={"100%"} bg={"teal.50"}>
          <Heading>Horizontal Scroll</Heading>
          <Heading>Scroll Down for the first div</Heading>
          <Box h={200} w={200} bg={"teal.100"}>
            <Heading>Subdiv</Heading>
          </Box>
        </Box>
      </Box>
      <Box mx={5} mb={2}>
        <Box h={"100vh"} w={"100%"} bg={"teal.100"}>
          <Heading>Part One</Heading>
        </Box>
      </Box>
    </Box>
  );
};
