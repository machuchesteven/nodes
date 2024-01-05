import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
const FlightsTable = () => {
  const departureDate = "Mon 20 Sep";
  const fadeColor = () => {
    console.log("Fade Color");
  };
  return (
    <>
      <Stack direction={"row"} my={1}>
        <Text width={"25%"} mx={5}>
          Qatar Airways
        </Text>
        <Text width={"13%"} mx={3}>
          {departureDate}
        </Text>
        <Text width={"8%"} mx={3} textAlign={"center"}>
          7h 30m
        </Text>
        <Text width={"13%"} mx={3} textAlign={"center"}>
          Arrival
        </Text>
        <Text width={"15%"} mx={5}>
          Price
        </Text>
        <Button colorScheme={"blue"} width={"6%"} size={"sm"}>
          Book
        </Button>
      </Stack>
      <hr />
      <Stack direction={"row"} my={1}>
        <Text width={"25%"} mx={5}>
          Kenya Airways
        </Text>
        <Text width={"13%"} mx={3}>
          {departureDate}
        </Text>
        <Text width={"8%"} mx={3} textAlign={"center"}>
          Duration
        </Text>
        <Text width={"13%"} mx={3} textAlign={"center"}>
          Arrival
        </Text>
        <Text width={"15%"} mx={5}>
          Price
        </Text>
        <Button colorScheme={"blue"} width={"6%"} size={"sm"}>
          Book
        </Button>
      </Stack>
      <hr />
      <Stack direction={"row"} my={1}>
        <Text width={"25%"} mx={5}>
          Fly Emirates
        </Text>
        <Text width={"13%"} mx={3}>
          {departureDate}
        </Text>
        <Text width={"8%"} mx={3} textAlign={"center"}>
          Duration
        </Text>
        <Text width={"13%"} mx={3} textAlign={"center"}>
          Arrival
        </Text>
        <Text width={"15%"} mx={5}>
          Price
        </Text>
        <Button colorScheme={"blue"} width={"6%"} size={"sm"}>
          Book
        </Button>
      </Stack>
      <hr />
      <Stack direction={"row"} my={1} onMouseOver={fadeColor()}>
        <Text width={"25%"} mx={5}>
          Air Tanzania
        </Text>
        <Text width={"13%"} mx={3}>
          {departureDate}
        </Text>
        <Text width={"8%"} mx={3} textAlign={"center"}>
          Duration
        </Text>
        <Text width={"13%"} mx={3} textAlign={"center"}>
          Arrival
        </Text>
        <Text width={"15%"} mx={5}>
          Price
        </Text>
        <Button
          colorScheme={"blue"}
          size={"sm"}
          width={"6%"}
          as={motion.div}
          whileTap={{ scale: 0.9 }}
        >
          Book
        </Button>
      </Stack>
    </>
  );
};

export default FlightsTable;
