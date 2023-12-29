import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux"; // used for accessing values of our states

function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <Box w={"60%"} mx={"auto"}>
        <Heading>Profile Component</Heading>
        <Text>Name: {user.name}</Text>
        <Text>Age: {user.age}</Text>
        <Text>Email: {user.email}</Text>
      </Box>
    </>
  );
}

export default Profile;
