import React from "react";
import { Box, Heading, Text, Stack, SimpleGrid } from "@chakra-ui/react";

function Hospital() {
  return (
    <>
      <Box>
        <Heading>Welcome to the hospital</Heading>
        <Box>
          <Heading>Community Services We Offer</Heading>
          <SimpleGrid columns={3}></SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Hospital;
