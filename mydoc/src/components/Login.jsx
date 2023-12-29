import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux"; // used to change values of our state
import { login, logout } from "../utils/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <Box w={"60%"} mx={"auto"}>
      <Heading>Login Component</Heading>
      <Text>username: </Text>
      <Text>password: </Text>
      <Button
        onClick={() => {
          dispatch(login({ name: "Machu", age: 20, email: "machu@gmail.com" }));
        }}
      >
        Login
      </Button>
      <Button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Login;
