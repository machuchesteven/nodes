import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Inner from "./components/Inner";

function App() {
  return (
    <>
      <Inner>
        <Box w={"80%"} h={"150vh"} mx={"auto"} bg={"teal.50"}>
          <Heading textAlign={"center"}>App</Heading>
          <Text textAlign={"center"} my={2}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Sed ac risus id libero egestas cursus.{" "}
            <br />
            Donec facilisis, velit in interdum pulvinar, erat ex pellentesque
            quam, a imperdiet massa <br />
            lorem id diam.
          </Text>
          <Heading ml={10}>COntact</Heading>
          <Text textAlign={"center"} my={2}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Sed ac risus id libero egestas cursus.{" "}
            <br />
            Donec facilisis, velit in interdum pulvinar, erat ex pellentesque
            quam, a imperdiet massa <br />
            lorem id diam.
          </Text>
          <Text textAlign={"center"} my={2}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Sed ac risus id libero egestas cursus.{" "}
            <br />
            Donec facilisis, velit in interdum pulvinar, erat ex pellentesque
            quam, a imperdiet massa <br />
            lorem id diam.
          </Text>
        </Box>
      </Inner>
      <Box w={"80%"} my={3} h={"100vh"} mx={"auto"} bg={"teal.200"}>
        <Heading textAlign={"center"}>Page2</Heading>
      </Box>
      <Box w={"80%"} my={3} h={"100vh"} mx={"auto"} bg={"teal.100"}>
        <Heading textAlign={"center"}>Page2</Heading>
      </Box>
    </>
  );
}

export default App;
