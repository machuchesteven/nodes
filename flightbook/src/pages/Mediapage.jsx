import React from "react";
import {
  Heading,
  Box,
  Text,
  Stack,
  SimpleGrid,
  Center,
  Input,
  Button,
} from "@chakra-ui/react";

function Mediapage() {
  return (
    <>
      <Box>
        <Heading>Here, for the Latest News!</Heading>
        <Text>Hot: Hot news headline for the landing page</Text>
      </Box>
      <Box>Choose a news Topic below</Box>
      <SimpleGrid columns={3} columnGap={2}>
        <Box>
          <Heading>Topic 1</Heading>
          <Text>Headline and other 54 stories</Text>
        </Box>
        <Box>
          <Heading>Topic 2</Heading>
          <Text>Headline and other 12 stories</Text>
        </Box>
        <Box>
          <Heading>Topic 3</Heading>
          <Text>Headline and other 31 stories</Text>
        </Box>
      </SimpleGrid>
      <Heading>Must Read This Week</Heading>
      <ul>
        <li>Headline 1</li>
        <li>Headline 2</li>
        <li>Headline 3</li>
        <li>Headline 4</li>
        <li>Headline 5</li>
      </ul>
      <Heading>Subscribe to the Newsletter</Heading>
      <Box width={"75%"} marginX={"auto"}>
        <Stack direction={"row"} my={2}>
          <Text width={"30%"}>Your Email</Text>
          <Input type="email" name="email" />
        </Stack>
        <Center my={2}>
          <Button colorScheme="red">Subscribe</Button>
        </Center>
      </Box>
    </>
  );
}

export default Mediapage;
