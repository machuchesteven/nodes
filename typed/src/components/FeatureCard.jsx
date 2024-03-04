import React from "react";
import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";

/** This adds a feature card to display Homepage features
 * That are offered by the project
 */
const FeatureCard = ({ header, description }) => {
  return (
    <Box p={2} border={"1px solid grey"} borderRadius={"md"} width={"100%"}>
      <Heading size={"md"} my={2}>
        {header}
      </Heading>
      <Text my={2}>{description}</Text>
      <Center>
        <Button px={2} my={1}>
          See More
        </Button>
      </Center>
    </Box>
  );
};

export default FeatureCard;
