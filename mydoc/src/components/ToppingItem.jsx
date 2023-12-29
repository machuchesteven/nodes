import React from "react";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";

function ToppingItem({ name }) {
  return (
    <Box p={2} borderWidth={1} borderColor={1} borderRadius={"lg"}>
      <Stack direction={"row"}>
        <Heading>{name}</Heading>
        <Button>Remove Topping</Button>
      </Stack>
    </Box>
  );
}

export default ToppingItem;
