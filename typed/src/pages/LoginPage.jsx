import React from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Checkbox,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
const LoginPage = () => {
  return (
    <Box maxW={["100%", null, "60%", "50%"]} mx={"auto"}>
      <Flex flexDir={"column"}>
        <Heading size={"lg"} my={3} textAlign={"center"}>
          Login To Typed
        </Heading>
        <Text textAlign={"center"} my={2}>
          There are a lot of functionalities once you login, including having a
          chance to learn in a more specific way based on your career
        </Text>
        <Input
          my={3}
          maxW={350}
          mx={"auto"}
          type="text"
          placeholder="username or email"
        />
        <Input
          my={3}
          maxW={350}
          mx={"auto"}
          type="password"
          placeholder="password"
        />
        <Center>
          <Checkbox my={3} mx={"auto"}>
            <Text mx={3}>Remember Me? </Text>
          </Checkbox>
        </Center>
        <Button w={"100%"} my={3}>
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default LoginPage;
