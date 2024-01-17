import React from "react";
import {
  Box,
  Heading,
  Text,
  useToast,
  Button,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import DemoModal from "../components/modals/DemoModal";

const ModalsPage = () => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w={"100%"} overflowX={"hidden"}>
      <Heading my={5} textAlign={"center"}>
        Modals and PopOvers
      </Heading>
      <Text>Toasts</Text>
      <Box
        as={Flex}
        align={"center"}
        justify={"center"}
        w={["inherit", null, "80%", "65%"]}
      >
        <Button
          onClick={() => {
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 1000,
              isClosable: true,
            });
          }}
        >
          Show Toast
        </Button>
        <hr />
      </Box>
      <Button onClick={toggleColorMode}>
        Toggle to {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <DemoModal />
    </Box>
  );
};

export default ModalsPage;
