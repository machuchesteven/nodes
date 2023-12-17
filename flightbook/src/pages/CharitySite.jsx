import React from "react";
import { Heading, Text, Stack, Box, Button } from "@chakra-ui/react";

function CharitySite() {
  <>
    <Box my={2}>
      <Text fontSize={"lg"}>Navbar</Text>
    </Box>
    <Box width={"80%"} marginX={"auto"} my={5}>
      <Heading textAlign={"center"}>
        Welcome, We Donate <br />
        to Give Them the Best
      </Heading>
      <Text my={4}>
        Our Next Point: <b>Bagamoyo Children Point</b>
      </Text>
      <Box my={2}>
        <hr />
      </Box>
      <Box>
        <Heading>What Do we plan to offer?</Heading>
        <Stack direction={"row"} gapX={2}>
          <Box width={"32%"}>
            <Heading size={"md"} margin={1}>
              Uniforms
            </Heading>
          </Box>
          <Box width={"32%"}>
            <Heading size={"md"} margin={1}>
              Food
            </Heading>
          </Box>
          <Box width={"32%"}>
            <Heading size={"md"} margin={1}>
              Financial Aid
            </Heading>
          </Box>
        </Stack>
      </Box>
      
    </Box>
  </>;
}

export default CharitySite;
