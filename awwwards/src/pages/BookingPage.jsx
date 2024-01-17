import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  Stack,
  List,
  ListItem,
  Popover,
  PopoverTrigger,
  Input,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
} from "@chakra-ui/react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // main style file

const FlightFrom = ({ header_name }) => {
  const ref = useRef();
  return (
    <>
      <Box>
        <Popover initialFocusRef={ref}>
          <PopoverTrigger>
            <Box>
              <Input type="text" placeholder={header_name} />
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <Input type="text" ref={ref} />
            </PopoverHeader>
            <PopoverBody>
              <Box>
                <List spacing={2}>
                  <ListItem>
                    <Stack direction={"column"}>
                      <Heading size={"md"}>First Suggestions</Heading>
                      <Text>Suggestions Text</Text>
                    </Stack>
                  </ListItem>
                  <hr />
                  <ListItem>
                    <Stack direction={"column"}>
                      <Heading size={"md"}>First Suggestions</Heading>
                      <Text>Suggestions Text</Text>
                    </Stack>
                  </ListItem>
                  <hr />
                  <ListItem>
                    <Stack direction={"column"}>
                      <Heading size={"md"}>First Suggestions</Heading>
                      <Text>Suggestions Text</Text>
                    </Stack>
                  </ListItem>
                </List>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

const FlightDateRange = ({ header_name }) => {
  const ref = useRef();
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleDateChange = (ranges) => {
    setDate(ranges.selection);
  };
  return (
    <>
      <Box my={10}>
        <Popover initialFocusRef={ref}>
          <PopoverTrigger>
            <Box w={"60%"} mx={"auto"}>
              <Input
                type="text"
                placeholder={
                  "From: \t" + date.startDate.toISOString().substring(0, 10)
                }
              />
            </Box>
          </PopoverTrigger>
          <PopoverContent w={"max-content"}>
            <DateRangePicker ranges={[date]} onChange={handleDateChange} />
            <Button w={"calc(100% - 10px)"} my={2} mx={"auto"}>
              Confirm
            </Button>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

const BookingPage = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleDateChange = (ranges) => {
    setDate(ranges.selection);
  };
  return (
    <Box my={5} mx={2}>
      <Heading>Pick Your Booking with Us</Heading>
      <Text>Booking</Text>
      <Box m={5} p={5} boxShadow={"md"} maxW={"fit-content"} mx={"auto"}>
        <Heading>{date.startDate.toISOString().substring(0, 10)}</Heading>
        <DateRangePicker ranges={[date]} onChange={handleDateChange} />
      </Box>
      <hr />
      <Box>
        <Heading textAlign={"center"} my={2}>
          Another DatePicker
        </Heading>
        <Box w={"70%"} mx={"auto"}>
          <FlightFrom header_name={"Pick Your Start Date"} />
        </Box>
        <Box w={"100%"} mx={"auto"}>
          <FlightDateRange header_name={"Pick Your Start Date"} />
        </Box>
        <Box minH={"100vh"}></Box>
      </Box>
    </Box>
  );
};

export default BookingPage;
