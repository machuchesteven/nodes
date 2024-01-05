import { Box, Input, Heading, Text, Stack, Button } from "@chakra-ui/react";

const SafariQuote = () => {
  return (
    <Box w={"80%"} marginX={"auto"} my={5}>
      <Heading textAlign={"center"}>Request a Price Quote for a Safari</Heading>
      <Input type="text" placeholder="Your Destination" my={2} w={"70%"} />
      <Input type="text" placeholder="From" my={2} w={"70%"} />
      <Text>Select your nationality</Text>
      <radiogroup>
        <radio>Tanzanian</radio>
        <radio>Foreign</radio>
      </radiogroup>
      <Stack direction={"row"} my={3}>
        <Text w={"30%"}>Your email</Text>
        <Input type="mail" w={"70%"} borderColor={"black"} />
      </Stack>
      <Stack direction={"row"} my={3}>
        <Text w={"30%"}>Complete Name</Text>
        <Input type="mail" w={"70%"} borderColor={"black"} />
      </Stack>
      <Button>Submit</Button>
    </Box>
  );
};

export default SafariQuote;
