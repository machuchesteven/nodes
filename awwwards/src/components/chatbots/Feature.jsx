import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
const Feature = ({ name, icon, ...props }) => {
  return (
    <Flex
      flexDir={"column"}
      justify={"center"}
      p={[3, null, 5]}
      boxShadow={"sm"}
      borderRadius={"md"}
      borderColor={"grey"}
      borderWidth={1}
    >
      <Heading mb={[3, null, 5]} textAlign={"center"}>
        Feature Name
      </Heading>
      <Text textAlign={"center"}>
        Feature loremrem ipsum dolor, sit amet consectetur adipisicing elit.
        Cupiditate earum facere enim obcaecati perferendis laudantium similique
        commodi possimus quos numquam
      </Text>
      <Button mt={[3, null, 5]} w={"max-width"}>
        Request Price
      </Button>
    </Flex>
  );
};

export default Feature;
