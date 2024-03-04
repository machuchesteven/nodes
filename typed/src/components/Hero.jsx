import React from "react";
import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Box maxW={["100%", null, "60%", "50%"]} mx={"auto"}>
      <Heading size={"lg"} my={3} textAlign={"center"}>
        Welcome to Typed
      </Heading>
      <Text textAlign={"center"} my={2}>
        The best place to learn typing and improve your speed and accuracy
      </Text>
      <Center>
        <Button as={"a"} my={3} href="learn">
          Play Demo
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
