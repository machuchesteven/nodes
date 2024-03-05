import React from "react";
import { Box, Flex, Heading, Text, Tag, Button } from "@chakra-ui/react";

const PricingCard = ({ tagColor, title, description }) => {
  return (
    <Box shadow={"md"} borderRadius={"sm"} p={[1, null, 3]}>
      <Flex flexDir={"column"}>
        <Tag colorScheme={tagColor} textAlign={"center"} px={2}>
          {title}
        </Tag>
        <Heading textAlign={"center"} my={1}>
          0
          <Text as={"span"} size={"md"} fontSize={"md"}>
            $
          </Text>
        </Heading>
        <Text mt={2} fontWeight={"semibold"} textAlign={"center"}>
          Features
        </Text>
        <Text>{description}</Text>
        <Button variant={"outline"}>Try It Out</Button>
      </Flex>
    </Box>
  );
};

export default PricingCard;
