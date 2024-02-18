import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  FormLabel,
  Divider,
} from "@chakra-ui/react";

const LoginsPage = () => {
  return (
    <>
      <Box>
        <Heading textAlign={"center"}>Login Pages for Different Apps</Heading>
        <Text textAlign={"center"}>Logins</Text>
        <Divider my={2} />
      </Box>
      <Box h={"100vh"} bg={"#fafafa"}>
        <Flex
          flexDir={"column"}
          justify={"center"}
          w={["100%", null, "80%", 400]}
          mx={"auto"}
          align={"center"}
        >
          <FormLabel>Hello</FormLabel>
          <Stack spacing={3}>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default LoginsPage;
