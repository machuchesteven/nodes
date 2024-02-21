import React from "react";
import { Heading, Flex, Text, Icon } from "@chakra-ui/react";
import { profile_data } from "../data/profile";
import { MdSettings } from "react-icons/md";
function Navbar() {
  return (
    <>
      <Flex flexDir={"row"}>
        <Icon Icon={MdSettings} />
        <Text>{profile_data.streak}</Text>
      </Flex>
    </>
  );
}

export default Navbar;
