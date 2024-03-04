import React from "react";
import { Box, Heading, Stack, Flex, Button, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box w={["92%", null, "80%", "70%"]} mx={"auto"}>
      <Flex
        flexDir={"row"}
        justify={"space-between"}
        align={"center"}
        mb={2}
        mt={1}
        px={2}
      >
        <Heading size={"md"} color={"black"}>
          Typed
        </Heading>
        <Stack
          as={"nav"}
          direction={"row"}
          spacing={5}
          display={{ sm: "none", md: "flex" }}
        >
          <Text px={2} fontWeight={"semibold"}>
            Challenges
          </Text>

          <Text px={2} fontWeight={"semibold"}>
            Leaderboard
          </Text>
          <Text px={2} fontWeight={"semibold"}>
            Prizes
          </Text>
        </Stack>
        <Stack direction={"row"}>
          <Button
            borderRadius={5}
            color={"black"}
            bg={"transparent"}
            _hover={{ bg: "whitesmoke" }}
            border={"2px solid #555555"}
          >
            Sign Up
          </Button>
          <Button
            borderRadius={5}
            color={"whitesmoke"}
            bg={"black"}
            _hover={{ bg: "#333333" }}
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
