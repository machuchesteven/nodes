import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import Message from "../components/chatbots/Message";
import Feature from "../components/chatbots/Feature";

function ChatbotPage() {
  return (
    <Box>
      <Heading mt={5} textAlign={"center"} w={["85%", null, "65%"]} mx={"auto"}>
        Welcome to BotChats: Business Automated Text Solution!
      </Heading>
      <Text w={["85%", null, "60%"]} mx={"auto"} my={2} textAlign={"center"}>
        We build Chatbots that helps you automate with accuracy most of the work
        needed to be done manually, to answer the common customer questions with
        the most polite tone
      </Text>
      <Center>
        <Button mx={"auto"} py={1} px={5}>
          See a Demo
        </Button>
      </Center>
      <Box w={["85%", null, "75%"]} mx={"auto"}>
        <Message />
        <Message type="receive" />
        <Message />
        <Message type="receive" />
        <Text size={"lg"} my={[3, null, 5]}>
          Add the Disappearing Framer animation for the text
        </Text>
      </Box>
      <hr />
      <SimpleGrid
        gap={[3, null, 5]}
        columns={[2, null, 3]}
        justifySelf={"center"}
        maxW={["100%", null, "80%", "65%"]}
        mx={"auto"}
        my={[3, null, 5]}
      >
        <Feature />
        <Feature />
        <Feature />
      </SimpleGrid>
      <Box minH={"30vh"}></Box>
    </Box>
  );
}

export default ChatbotPage;
