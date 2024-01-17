import React from "react";
import { Box, Avatar, Flex, Text } from "@chakra-ui/react";
const Message = ({ text, type = "sent", ...props }) => {
  return (
    <Box
      {...props}
      p={2}
      borderRadius={"md"}
      boxShadow={"md"}
      m={2}
      maxW={300}
      bg={type === "sent" ? "blue.50" : "green.50"}
      borderColor={type === "sent" ? "blue.500" : "green.500"}
      borderWidth={1}
    >
      <Flex
        flexDir={type === "sent" ? "row" : "row-reverse"}
        align={"center"}
        gap={2}
      >
        <Avatar size={"sm"} />
        <Text fontSize={"sm"}>Message text words</Text>
      </Flex>
    </Box>
  );
};

export default Message;
