import React, { useEffect, useContext } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import ViewBasedAnimation from "../components/ViewBasedAnimation";
import ScrollBasedAnimation from "../components/ScrollBasedAnimation";
import AuthContext from "../utils/AuthContext";

function Aboutpage() {
  const contextData = useContext(AuthContext);
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollY);
    console.log(scrollYProgress);
  }, [scrollYProgress, scrollY]);
  return (
    <Box>
      <ScrollBasedAnimation />
      <Heading>About for {contextData.name}</Heading>
      <Box h={"100vh"} bg={"teal.100"} my={4} mx={4}></Box>
      <Box h={"100vh"} bg={"teal.200"} my={4} mx={4}></Box>
      <ViewBasedAnimation />
      <Box h={"100vh"} bg={"teal.100"} my={4} mx={4}></Box>
      <Box h={"100vh"} bg={"teal.200"} my={4} mx={4}></Box>
      <Button colorScheme="blue" onClick={() => contextData.setUser("machu")}>
        Change User Now
      </Button>
      <Box h={"100vh"} bg={"teal.100"} my={4} mx={4}></Box>
      <Box h={"100vh"} bg={"teal.200"} my={4} mx={4}></Box>
    </Box>
  );
}

export default Aboutpage;
