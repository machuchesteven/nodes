import React from "react";
import { useToast } from "@chakra-ui/react";
import Hero from "../components/Hero";
const Homepage = () => {
  // const toast = useToast();
  // toast({
  //   title: "Welcome to Typed",
  //   description:
  //     "The best place to learn typing and improve your speed and accuracy",
  //   status: "success",
  //   duration: 9000,
  //   isClosable: true,
  // });
  return (
    <>
      <Hero />
    </>
  );
};

export default Homepage;
