import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Login from "../components/Login";
import { useSelector } from "react-redux";
function LoginPage() {
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <>
      <Box>
        <Heading color={themeColor}>LoginPage Page</Heading>
        <Login />
      </Box>
    </>
  );
}
export default LoginPage;
