import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
const SummaryCard = ({ color, ...props }) => {
  return (
    <Box bg={`${color}.100`} height={200} width={200} borderRadius={"lg"} p={1}>
      <Flex mx={2} align={"center"} flexDir={"row"} justify={"space-between"}>
        <Heading size={"sm"} as={"h3"}>
          Visa
        </Heading>
        <Heading size={"lg"} as={"h3"}>
          98
        </Heading>
      </Flex>
      {/* <Flex height={"100%"} align={"center"} w={"100%"}> */}
      <Text my={"auto"} textAlign={"center"} align={"center"}>
        Active Visa Cards
      </Text>
      {/* </Flex> */}
    </Box>
  );
};

export default SummaryCard;
