import React from "react";
import { Box, Heading, Text, Button, useToast } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Homepage = () => {
  const toast = useToast();
  toast({
    title: "Welcome to Typed",
    description:
      "The best place to learn typing and improve your speed and accuracy",
    status: "success",
    duration: 9000,
    isClosable: true,
  });
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Homepage;
