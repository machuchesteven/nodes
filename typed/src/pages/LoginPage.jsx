import React from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Checkbox,
  Center,
  Text,
} from "@chakra-ui/react";
const LoginPage = () => {
  return (
    <Box maxW={["100%", null, "60%", "50%"]} mx={"auto"}>
      <Heading my={3}>Login Page</Heading>
      <Input my={3} type="text" placeholder="username or email" />
      <Input my={3} type="password" placeholder="password" />
      <Center>
        <Checkbox my={3} mx={"auto"}>
          <Text mx={3}>Remember Me? </Text>
        </Checkbox>
      </Center>
      <Button w={"100%"} my={3}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
