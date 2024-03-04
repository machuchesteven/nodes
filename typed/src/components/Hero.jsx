import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Box maxW={["100%", null, "60%", "50%"]} mx={"auto"}>
      <Heading size={"lg"} my={3} textAlign={"center"}>
        Welcome to Typed
      </Heading>
      <Text textAlign={"center"} my={2}>
        The best place to learn typing and improve your speed and accuracy
      </Text>
      <Button w={"100%"} my={3} href="/login">
        Login
      </Button>
    </Box>
  );
};

export default Hero;
