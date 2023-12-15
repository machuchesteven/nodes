import React, { useState } from "react";
import {
  Heading,
  Box,
  Text,
  ButtonGroup,
  Button,
  Center,
  Stack,
  Input,
  Select,
} from "@chakra-ui/react";
import { m, motion } from "framer-motion";
// import { DatePicker } from "@orange_digital/chakra-datepicker";

// import data and not harcode again
// These acts as temporary data sources
import { steps } from "../data/data_info";

function Homepage() {
  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().substring(0, 10)
  ); // Get today's date in YYYY-MM-DD format
  // const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with current date

  const handleChange = (event) => {
    setDepartureDate(event.target.value);
  };
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  // const isPastDate = (date) => {
  //   const today = new Date();
  //   return date < today;
  // };
  // let maxDate = new Date().toISOString().substring(0, 10)
  let maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maximumDate = maxDate.toISOString().substring(0, 10);
  function fadeColor() {}
  return (
    <>
      <Box mx={5} mt={5}>
        <Heading textAlign={"center"} my={2}>
          Fly With Us,
          <br />
          Fly Luxurious
        </Heading>
        <Text textAlign={"center"} my={2}>
          Book your trip at the best price with the best deals from us!
        </Text>
        <Box my={2}>
          <Text textAlign={"center"}>Select Date</Text>
        </Box>
        <Center>
          <Stack direction={"row"} mx={"auto"} justify={"center"}>
            <ButtonGroup isAttached variant={"outline"}>
              <Button minW={100}>From</Button>
              <Button minW={100}>To</Button>
            </ButtonGroup>
          </Stack>
        </Center>
        <Center>
          <Stack direction={"row"} my={3}>
            <Input
              type="date"
              value={departureDate}
              min={departureDate}
              onChange={handleChange}
              placeholder="Departure Date"
            />
            <Input
              placeholder={"Return Date"}
              type="date"
              min={departureDate}
              max={maximumDate}
            />
          </Stack>
        </Center>
        <Center my={2}>
          <Button px={5} colorScheme={"blue"}>
            Search for flights
          </Button>
        </Center>
        <hr />
        <Heading size={"lg"} textAlign={"center"} my={2}>
          Available flights on {departureDate}
        </Heading>
        <Box maxW={"80%"} marginX={"auto"}>
          {/* Flight component */}
          <Stack direction={"row"} bg="#dfdfdf" py={3} borderRadius={"md"}>
            <Heading size={"md"} width={"25%"} mx={5}>
              Airline
            </Heading>
            <Heading size={"md"} width={"13%"} mx={3}>
              Departure
            </Heading>
            <Heading size={"md"} width={"8%"} mx={3} textAlign={"center"}>
              Duration
            </Heading>
            <Heading size={"md"} width={"13%"} mx={3} textAlign={"center"}>
              Arrival
            </Heading>
            <Heading size={"md"} width={"20%"} mx={5}>
              Price
            </Heading>
          </Stack>
          <Box>
            {/* Open the flights part */}
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
          </Box>{" "}
          {/* Close the flights part */}
        </Box>
        {/* Add the  */} <hr />
        <Box my={5}>
          <Heading textAlign={"center"}>Booking Progress</Heading>
        </Box>
      </Box>
      {/* Seleccting wedding and Luxurius safari carsa */}
      <Box my={10}>
        <Heading textAlign={"center"}>
          Select Wedding <br />
          Luxurious Modern Cars
        </Heading>
        <Text textAlign={"center"}>
          Select your wedding car from our wide range of luxurious cars
        </Text>
        <Box my={5}>
          <Text textAlign={"center"}>Select Date</Text>
          <Text textAlign={"center"}>Select Model</Text>
          <Center>
            <Button
              onPress={() => {
                console.log("Search for your dream car");
              }}
              colorScheme="green"
              my={2}
            >
              Search for cars
            </Button>
          </Center>
        </Box>
      </Box>

      {/* Steps in cars selecting with vamos renting system */}
      <Box>
        <Heading textAlign={"center"}>Car Booking steps</Heading>``
      </Box>
      {/* Selecting a Safari package with the tabs indicating what the package offers */}
      <Box>
        <Heading textAlign={"center"}>Select Safari Package</Heading>
        <Text textAlign={"center"}>
          Select your traveling package from us during this holiday moment
        </Text>
        <Box maxW={"50%"} mx={"auto"}>
          <Select placeholder="Package type with us" >
            <Text as={"option"}></Text>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box my={5}>
          <Text textAlign={"center"}>Select Date</Text>
          <Text textAlign={"center"}>Select Model</Text>
          <Center>
            <Button
              onPress={() => {
                console.log("Search for your dream car");
              }}
              colorScheme="green"
              my={2}
            >
              Check a Package
            </Button>
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default Homepage;
