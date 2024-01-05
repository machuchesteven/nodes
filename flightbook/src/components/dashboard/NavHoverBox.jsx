import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

const NavHoverBox = ({ ...props }) => {
  return (
    <>
      <Flex></Flex>
      <Flex h={200} w={200} flexDir={'column'} alignItems={'center'} justify={'center'}></Flex>
    </>
  );
};

export default NavHoverBox;
