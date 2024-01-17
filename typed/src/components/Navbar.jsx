import React from "react";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import { profile_data } from "../data/profile";
function Navbar() {
  return (
    <>
      <Flex flexDir={"row"}>
        <Heading>Navbar</Heading>
        <Text>Navbar Menu</Text>
        <Text>Customization</Text>
        <Text>{profile_data.streak}</Text>
      </Flex>
    </>
  );
}

export default Navbar;
